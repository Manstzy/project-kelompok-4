import { useState } from "react";
import arrowDown from "../../images/arrow-down.png";

const Sidebar = () => {
  const [hidden1, setHidden1] = useState(false);
  const [hidden2, setHidden2] = useState(false);
  const [hidden3, setHidden3] = useState(false);
  const hiddenShow1 = (e) => {
    e.preventDefault();
    setHidden1(!hidden1);
  };
  const hiddenShow2 = (e) => {
    e.preventDefault();
    setHidden2(!hidden2);
  };
  const hiddenShow3 = (e) => {
    e.preventDefault();
    setHidden3(!hidden3);
  };
 
  return (
    <div className="mb-10">
      <h1 className="font-semibold">SARUNG</h1>
      <h1 className="font-semibold mt-8">FRODUCT CATEGORIES</h1>
      <div className="bg-[#ed1c24] h-1 mt-2 w-7"></div>
      <ul>
        <a
          onClick={hiddenShow1}
          href=""
          className="w-60 pb-2 border-b border-gray-400 flex flex-col justify-between"
        >
          <span className="w-60 flex justify-between">
            <li className="font-semibold mt-4">Sprei</li>
            <img src={arrowDown} className="w-5 h-5 mt-5" alt="" />
          </span>
          <span className={hidden1 ? "px-2 py-1" : "hidden"}>
            Sprei Atlas Premium
          </span>
        </a>

        <a
          onClick={hiddenShow2}
          href=""
          className="flex w-60 flex-col justify-between border-b-[1px] pb-[2px] border-slate-400 "
        >
          <span className="w-60 flex justify-between">
            <li className="mt-4">Fashion Anak</li>
            <img src={arrowDown} className="w-5 h-5 mt-5" alt="" />
          </span>
          <span className={hidden2 ? "px-2 py-1" : "hidden"}>
            Busana Muslim
          </span>
        </a>
        <a
          onClick={hiddenShow3}
          href=""
          className="flex w-60 flex-col justify-between border-b-[1px] pb-[2px] border-slate-400 "
        >
          <span className="w-60 flex justify-between">
            <li className="mt-4">Fashion Pria</li>
            <img src={arrowDown} className="w-5 h-5 mt-5" alt="" />
          </span>
          <span className={hidden3 ? "px-2 py-1" : "hidden"}>
            Busana Muslim
          </span>
        </a>
        <a
          href=""
          className="flex w-60 justify-between border-b-[1px] pb-[2px] border-slate-400 "
        >
          <li className="mt-4 text-[16px] flex text-sm">Produk Lainnya</li>
        </a>
        <a
          href=""
          className="flex w-60 justify-between border-b-[1px] pb-[2px] border-slate-400 "
        >
          <li className="mt-4 text-[16px] flex text-sm">Sarung</li>
          <img src={arrowDown} className="w-5 h-5 mt-5 " alt="" />
        </a>
        <a
          href=""
          className="flex w-60 justify-between border-b-[1px] pb-[2px] border-slate-400 "
        >
          <li className="mt-4 text-[16px] flex text-sm">Baju Muslim </li>
          <img src={arrowDown} className="w-5 h-5 mt-5 " alt="" />
        </a>
        <a
          href=""
          className="flex w-60 justify-between border-b-[1px] pb-[2px] border-slate-400 "
        >
          <li className="mt-4 text-[16px] flex text-sm">Songkok </li>
          <img src={arrowDown} className="w-5 h-5 mt-5 " alt="" />
        </a>
        <a
          href=""
          className="flex w-60 justify-between border-b-[1px] pb-[2px] border-slate-400 "
        >
          <li className="mt-4 text-[16px] flex text-sm">Subaiyah </li>
          <img src={arrowDown} className="w-5 h-5 mt-5 " alt="" />
        </a>
        <a
          href=""
          className="flex w-60 justify-between border-b-[1px] pb-[2px] border-slate-400 "
        >
          <li className="mt-4 text-[16px] flex text-sm">Kain Batik </li>
          <img src={arrowDown} className="w-5 h-5 mt-5 " alt="" />
        </a>
        <a
          href=""
          className="flex w-60 justify-between border-b-[1px] pb-[2px] border-slate-400 "
        >
          <li className="mt-4 text-[16px] flex text-sm">Grosir </li>
          <img src={arrowDown} className="w-5 h-5 mt-5 " alt="" />
        </a>
      </ul>
    </div>
  );
};

export default Sidebar;
