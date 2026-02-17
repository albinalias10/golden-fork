import { Button } from "react-bootstrap";
import { useAppDispatch } from "../app/hooks";
import { setActiveMenu } from "../features/menu/menuSlice";

const menus = ["Basic", "Standard", "Grand", "Elegant", "Executive"];

export default function MenuTabs() {
  const dispatch = useAppDispatch();

  return (
    <div className="d-flex justify-content-center gap-3 flex-wrap">
      {menus.map(menu => (
        <Button
          key={menu}
          className="menu-tab"
          onClick={() => dispatch(setActiveMenu(menu))}
        >
          {menu} Menu
        </Button>
      ))}
    </div>
  );
}
