import { Modal, Button } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { closeModal } from "../features/menu/menuSlice";
import { menuData } from "../features/menu/menuData";
import { useNavigate } from "react-router-dom";

export default function MenuModal() {
  const { isModalOpen, activeMenu } = useAppSelector(state => state.menu);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const selectedMenu = menuData[activeMenu];

  if (!selectedMenu) return null;

  return (
    <Modal show={isModalOpen} onHide={() => dispatch(closeModal())} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title>{selectedMenu.name}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {selectedMenu.categories.map((cat, i) => (
          <div key={i} className="mb-4">
            <h6 className="fw-bold">{cat.title}</h6>
            <ul>
              {cat.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </Modal.Body>

      <Modal.Footer>
        <Button variant="dark" onClick={() => navigate("/customise-menu")}>
          Customise Menu
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
