import ProductList from "../components/ProductList";
import Sidebar from "../components/Sidebar";
import LandingPageTemplate from "../components/templates/LandingPageTemplate";

const ListProductSarung = () => {
  return (
    <LandingPageTemplate>
      <div className="flex">
        <Sidebar />
        <ProductList />
      </div>
    </LandingPageTemplate>
  );
};

export default ListProductSarung;
