/* eslint-disable react/no-children-prop */
import Background from "../../images/backgroundFooter.jpg";
import List from "./List";
import Youtube from "../../images/youtube.svg";
import Instagram from "../../images/instagram.svg";
import Faceboock from "../../images/faceboock.svg";

const Footer = () => {
  return (
    <div className="relative">
      <img src={Background} className="w-full h-full absolute" alt="" />

      <div className="large:grid large:grid-cols-3">
        <div>
          <p className="relative px-4 py-8 font-bold text-white">SHOP</p>
          <div className="bg-white/40 w-8 h-[2.5px] -mt-4 ml-4 relative"></div>
          <ul className="mt-4 large:mt-2">
            <List children={"Sarung"} />
            <List children={"Baju Muslim"} />
            <List children={"Songkok"} />
            <List children={"Subaiyah"} />
            <List children={"Kain Batik"} />
            <List children={"Sprei"} />
            <List children={"Grosir"} />
            <List children={"Product Lainnya"} />
          </ul>
        </div>

        <div>
          <p className="relative px-4 py-8 font-bold text-white">HELP</p>
          <div className="bg-white/40 w-8 h-[2.5px] -mt-4 ml-4 relative"></div>
          <ul className="mt-4 large:mt-2">
            <List children={"How to Order"} />
            <List children={"Customer Service"} />
            <List children={"My Sarung Indonesia"} />
            <List children={"Legal & Privacy"} />
            <List children={"Contact"} />
          </ul>
        </div>

        <div>
          <p className="relative px-4 py-8 font-bold text-white">INFO</p>
          <div className="bg-white/40 w-8 h-[2.5px] -mt-4 ml-4 relative"></div>
          <ul className="mt-4 large:mt-2">
            <List children={"About Sarung Indonesia"} />
          </ul>

          <h1 className="text-white font-bold relative ml-4 mt-4">
            Follow Us :
          </h1>
          <div className="relative flex ml-4 pb-16">
            <a href={"https://www.youtube.com/"}>
              <img
                src={Faceboock}
                className="filter invert text-white"
                alt=""
              />
            </a>
            <a href={"https://www.youtube.com/"}>
              <img
                src={Instagram}
                className="filter invert text-white"
                alt=""
              />
            </a>
            <a href={"https://www.youtube.com/"}>
              <img src={Youtube} className="filter invert text-white" alt="" />
            </a>
          </div>
        </div>
      </div>

      <div className="bg-[#aa0e0f] relative text-center text-white/50 px-2 py-3">
        Copyright 2024{" "}
        <a className="font-semibold" href="#">
          &copy; Sarung Indonesia
        </a>
      </div>
    </div>
  );
};

export default Footer;
