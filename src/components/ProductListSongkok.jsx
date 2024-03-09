import { Link } from "react-router-dom";

const ProductListSongkok = ({dataSongkok}) => {
  console.log(dataSongkok);
  return (
    <div className="grid grid-cols-2 medium:grid-cols-3 px-4 gap-5 mt-10 mb-10 ">
      {dataSongkok.map((items) => (
        <div key={items.id} className="w-full cursor-pointer relative">
          <div className="absolute flex items-center justify-center top-0 left-0 w-10 h-10 z-10 bg-red-500 rounded-full transform translate-y-[25px] ">
            <p className="text-white font-semibold text-sm">-55%</p>
          </div>
          <Link to={"/list-product/detail"}>
            <img src={items.image} className="opacity-85" alt="" />
          </Link>
          <p className="text-[13px] pr-2 mt-2">{items.title}</p>
          <p className="text-[#f78da7] relative text-[13px]">
            {formatCurrency(items.priceOri)}
            <span className="absolute bg-slate-400 h-[2px] w-20 inset-0 transform translate-y-[8px]"></span>
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

export default ProductListSongkok;
