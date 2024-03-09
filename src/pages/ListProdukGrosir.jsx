
import ProdukGrosir from "../components/ProdukGrosir";
import Sidebar from "../components/Sidebar";
import LandingPageTemplate from "../components/templates/LandingPageTemplate";
import { dataGrosir } from "../data/data";

const ListProductGrosir = () => {
  return (
    <LandingPageTemplate>
      <div className="flex">
        <Sidebar />
        <ProdukGrosir dataGrosir={dataGrosir} />
      </div>
    </LandingPageTemplate>
  );
};

export default ListProductGrosir;
