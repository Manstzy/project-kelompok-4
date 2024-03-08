import ProductList from "../components/ProductList";
import Sidebar from "../components/Sidebar";
import LandingPageTemplate from "../components/templates/LandingPageTemplate";

const ListProduct = () => {
  return (
    <LandingPageTemplate>
      <div className="flex">
        <Sidebar />
        <ProductList />
      </div>
    </LandingPageTemplate>
  );
};

export default ListProduct;
