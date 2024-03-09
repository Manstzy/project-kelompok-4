import Sidebar from "../components/Sidebar";
import LandingPageTemplate from "../components/templates/LandingPageTemplate";
import { dataKainBatik } from "../data/data";
import ProductListKainBatik from "../components/ProdukListKainBatik";
const ListProductKainBatik = () => {
  return (
    <LandingPageTemplate>
      <div className="flex">
        <Sidebar />
        <ProductListKainBatik dataKainBatik={dataKainBatik} />
      </div>
    </LandingPageTemplate>
  );
};

export default ListProductKainBatik;
