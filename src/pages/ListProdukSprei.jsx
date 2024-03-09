import ProductListSprei from "../components/ProdukListSprei";
import Sidebar from "../components/Sidebar";
import LandingPageTemplate from "../components/templates/LandingPageTemplate";
import { dataSprei } from "../data/data";

const ListProductSprei = () => {
  return (
    <LandingPageTemplate>
      <div className="flex">
        <Sidebar />
        <ProductListSprei dataSprei={dataSprei} />
      </div>
    </LandingPageTemplate>
  );
};

export default ListProductSprei;
