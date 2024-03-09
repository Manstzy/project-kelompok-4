import Sidebar from "../components/Sidebar";
import LandingPageTemplate from "../components/templates/LandingPageTemplate";
import { dataBajuMuslim } from "../data/data";
import ProductListDataBajuMuslim from "../components/ProductListBajuMuslim";
const ListProductBajuMuslim = () => {
  return (
    <LandingPageTemplate>
      <div className="flex">
        <Sidebar />
        <ProductListDataBajuMuslim dataBajuMuslim={dataBajuMuslim} />
      </div>
    </LandingPageTemplate>
  );
};

export default ListProductBajuMuslim;
