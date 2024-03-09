import Sidebar from "../components/Sidebar";
import LandingPageTemplate from "../components/templates/LandingPageTemplate";
import { dataProdukLainnya } from "../data/data";
import ProductListLainnya from "../components/ProdukLainnya"
const ListProductLainnya = () => {
  return (
    <LandingPageTemplate>
      <div className="flex">
        <Sidebar />
        <ProductListLainnya dataProdukLainnya={dataProdukLainnya} />
      </div>
    </LandingPageTemplate>
  );
};

export default ListProductLainnya;
