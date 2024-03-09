import { Link } from "react-router-dom";
import { IoBagAddOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";

import {
  addItemsCart,
  selectItems,
  selectTotalItems,
  selectTotalPrice,
} from "../redux/cart/cartSlice";

const ProductListSprei = ({ dataSprei }) => {
  const dispatch = useDispatch();
  const items = useSelector(selectItems);
  const totalPrice = useSelector(selectTotalPrice);
  const totalItems = useSelector(selectTotalItems);
  console.log(totalPrice);
  console.log(totalItems);
  console.log(items);
  const handleClick = (product) => {
    dispatch(addItemsCart(product));
  };
  console.log(dataSprei);
  return (
    <div className="grid grid-cols-2 medium:grid-cols-3 large:grid-cols-4 px-4 gap-5 mt-10 mb-10 ">
      {dataSprei.map((items) => (
        <div
          key={items.id}
          className="w-full cursor-pointer relative"
          onClick={() => handleClick(items)}
        >
          <div className="absolute flex items-center justify-center top-0 left-0 w-10 h-10 z-10 bg-red-500 rounded-full transform translate-y-[25px] ">
            <p className="text-white font-semibold text-sm">-55%</p>
          </div>
          <div className="overflow-hidden relative">
            <img src={items.image} className="opacity-85" alt="" />
            <div className="hover:bg-primary hover:opacity-80 translate-y-[25%] flex-col gap-2 transition-all duration-300 cursor-grab flex absolute opacity-0 justify-center inset-0">
              <IoBagAddOutline className="w-8 h-8 hover:text-red-500 ml-2" />
              <Link
                to={"/list-product/detail"}
                className="bg-red-500 text-white w-full flex items-center justify-center h-10"
              >
                Quick View
              </Link>
            </div>
          </div>
          <p className="text-[13px] pr-2 mt-2">{items.title}</p>
          <p className="text-[#f78da7] relative text-[13px] w-[68px]">
            {formatCurrency(items.priceOri)}
            <span className="absolute bg-slate-400 h-[2px] w-auto inset-0 transform translate-y-[8px]"></span>
          </p>
          <p className="text-[13px]">{formatCurrency(items.price)}</p>
        </div>
      ))}
    </div>
  );
};

// Fungsi untuk memformat harga sebagai mata uang Rupiah tanpa nol desimal di belakang
const formatCurrency = (price) => {
  return price.toLocaleString("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  });
};

export default ProductListSprei;
