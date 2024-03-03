import LandingPageTemplate from "../components/templates/LandingPageTemplate";
import SidebarMenu from "../components/sidebar";

const ListProduct = () => {
  return (
    <LandingPageTemplate>
      <SidebarMenu />
      <a href="/list-product/detail">INI HALAMAN LIST PRODUCT</a>
    </LandingPageTemplate>
  );
};

export default ListProduct;
