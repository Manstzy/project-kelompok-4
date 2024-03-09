
import ProductListSubaiyah from "../components/ProdukListSubaiyah";
import Sidebar from "../components/Sidebar";
import LandingPageTemplate from "../components/templates/LandingPageTemplate";


const ListProductSubaiyah = () => {
  return (
    <LandingPageTemplate>
      <div className="flex">
        <Sidebar />
        <ProductListSubaiyah  />
      </div>
    </LandingPageTemplate>
  );
};

export default ListProductSubaiyah;
