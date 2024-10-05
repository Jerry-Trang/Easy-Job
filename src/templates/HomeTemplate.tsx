import Footer from "../components/footer";
import Banner from "../pages/HomePage/components/banner";
import Benefits from "../pages/HomePage/components/benefits";
import Header from "../pages/HomePage/components/header";

export default function HomeTemplate() {
  return (
    <div className="content-wrapper max-w-screen-2xl">
      <Header />
      <div style={{ minHeight: "80vh" }}>
        <Banner /> 
        <Benefits />
      </div>
      <Footer />
    </div>
  );
}
