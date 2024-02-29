import LandingPageTemplate from "../components/templates/LandingPageTemplate"
import ProductDetail from "../components/ProductDetail"
import ProductDetailDescription from "../components/ProductDetailDescription"

const ProductDetailPage = () => {
  return (
    <LandingPageTemplate>
      <ProductDetail/>
      <ProductDetailDescription/>
    </LandingPageTemplate>
  )
}

export default ProductDetailPage