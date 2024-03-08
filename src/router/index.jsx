import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import ListProductSarung from "../pages/ListProductSarung";
import ProductDetailPage from "../pages/ProductDetailPage";
import LoginRegPage from "../pages/LoginRegPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/list-product/sarung",
    element: <ListProductSarung />,
  },
  {
    path: "/list-product/detail",
    element: <ProductDetailPage />,
  },
  {
    path:"/my-account",
    element:<LoginRegPage />
  }
]);
