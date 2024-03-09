
import ProductListSarung from "../components/ProductListSarung";
import Sidebar from "../components/Sidebar";
import LandingPageTemplate from "../components/templates/LandingPageTemplate";
import { dataSarung } from "../data/data";

const ListProductSarung = () => {
  return (
    <LandingPageTemplate>
      <div className="flex">
        <Sidebar />
        <ProductListSarung dataSarung={dataSarung} />
      </div>
    </LandingPageTemplate>
  );
};

export default ListProductSarung;
