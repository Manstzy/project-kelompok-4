
import ProductListSongkok from "../components/ProductListSongkok";
import Sidebar from "../components/Sidebar";
import LandingPageTemplate from "../components/templates/LandingPageTemplate";
import { dataSongkok } from "../data/data";

const ListProductSongkok = () => {
  return (
    <LandingPageTemplate>
      <div className="flex">
        <Sidebar />
        <ProductListSongkok dataSongkok={dataSongkok} />
      </div>
    </LandingPageTemplate>
  );
};

export default ListProductSongkok;
