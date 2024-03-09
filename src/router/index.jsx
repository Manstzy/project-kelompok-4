import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import ProductDetailPage from "../pages/ProductDetailPage";
import LoginRegPage from "../pages/LoginRegPage";
import ListProductSarung from "../pages/ListProductSarung";
import ListProductBajuMuslim from "../pages/ListProductBajumMuslim";
import ListProductSongkok from "../pages/ListProductSongkok";
import ListProductSubaiyah from "../pages/ListProdukSubaiyah";
import ListProductKainBatik from "../pages/ListProdukBatik";
import ListProductSprei from "../pages/ListProdukSprei";
import ListProdukLainnya from "../pages/ListProdukLainnya"
import ListProductGrosir from "../pages/ListProdukGrosir";
import DropshipperPage from "../pages/DropshipperPgae";

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
    path: "/list-product/baju-muslim",
    element: <ListProductBajuMuslim />,
  },
  {
    path: "/list-product/songkok",
    element: <ListProductSongkok />,
  },
  {
    path: "/list-product/subaiyah",
    element: <ListProductSubaiyah />,
  },
  {
    path: "/list-product/kain-batik",
    element: <ListProductKainBatik />,
  },
  {
    path: "/list-product/sprei",
    element: <ListProductSprei />,
  },
  {
    path: "/list-product/grosir",
    element: <ListProductGrosir />,
  },
  {
    path: "/list-product/produk-lainnya",
    element: <ListProdukLainnya />,
  },
  {
    path: "/list-product/detail",
    element: <ProductDetailPage />,
  },
  {
    path: "/list-product/dropshipper",
    element: <DropshipperPage />,
  },
  {
    path: "/my-account",
    element: <LoginRegPage />,
  },
]);
