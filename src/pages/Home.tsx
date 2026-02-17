import Header from "../components/Header";
import HotelOverView from "../components/HotelOverView";
import MenuOverview from "../components/menuOverview";

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <div className="page-wrapper full-bg">
        <Header />
        <HotelOverView />
      </div>

      {/* MENU SECTION */}
      <MenuOverview />
    </>
  );
}
