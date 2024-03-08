import { useLocation } from "react-router";
import Header from "../Header";
import Footer from "../Footer";

const LandingPageTemplate = ({ children }) => {
  const { pathname } = useLocation();

  return (
    <div>
      {pathname === "/" && (
        <div className="bg-[#E2E2E2] m-0 p-0 w-full h-full"></div>
      )}
      <Header />
      <main className=" max-w-[1060px] mx-auto">{children}</main>
      <Footer />
    </div>
  );
};

export default LandingPageTemplate;
