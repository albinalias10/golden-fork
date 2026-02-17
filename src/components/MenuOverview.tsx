import MenuTabs from "./MenuTabs";
import MenuModal from "./MenuModal";

export default function MenuOverview() {
  return (
    <section id="menu" className="menu-section">
      <div className="text-center mb-5">
        <h2 className="menu-title">Our Menu Packages</h2>
        <h4 className="fw-bold">Taste Something Fresh</h4>
        <div className="underline mx-auto" />
      </div>

      <MenuTabs />
      <MenuModal />
    </section>
  );
}
