import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import ListProduct from "../pages/ListProduct";
import ProductDetailPage from "../pages/ProductDetailPage";

export const router = createBrowserRouter([
  {
    path:"/",
    element:<LandingPage/>,
  },
  {
    path:"/list-product",
    element:<ListProduct/>,
  },
  {
    path:"/list-product/detail",
    element:<ProductDetailPage/>,
  }
])