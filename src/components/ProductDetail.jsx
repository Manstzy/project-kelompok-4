import { useState } from "react";

const ProductDetail = () => {
  const [count, setCount] = useState(1);
  const increase = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    if (count <= 1) {
      setCount(1);
    } else {
      setCount(count - 1);
    }
  };
  return (
    <div className="px-4 py-10 large:flex large:gap-10 desktop:gap-8 desktop:px-8 font-[sans-serif]">
      <div className="grid grid-cols-4 gap-4 large:max-w-[450px] desktop:max-w-[480px]">
        <img
          className="col-span-4"
          src="https://jubelio-store.s3.ap-southeast-1.amazonaws.com/sarungindonesia/2024/02/23033414/c93b88e0-65be-4942-8726-a4dac881f54b-800x800.jpg"
          alt=""
        />
        <div className=" overflow-hidden miniLarge:h-28 -z-10">
          <img
            className="opacity-[0.5] hover:opacity-100 -mb-[5px] hover:transform hover:-translate-y-[5px] overflow-hidden transition-all duration-300 cursor-grab "
            src="https://jubelio-store.s3.ap-southeast-1.amazonaws.com/sarungindonesia/2024/02/23033414/c93b88e0-65be-4942-8726-a4dac881f54b-800x800.jpg"
            alt=""
          />
        </div>
        <div className="overflow-hidden miniLarge:h-28 -z-10">
          <img
            className="opacity-[0.5] hover:opacity-100 -mb-[5px] hover:transform hover:-translate-y-[5px] overflow-hidden transition-all duration-300 cursor-grab "
            src="https://jubelio-store.s3.ap-southeast-1.amazonaws.com/sarungindonesia/2024/02/23033424/d0100a56-dce9-46bf-8e99-1abd16060c15-300x300.jpg"
            alt=""
          />
        </div>
        <div className="overflow-hidden miniLarge:h-28 -z-10 ">
          <img
            className="opacity-[0.5] hover:opacity-100 -mb-[5px] hover:transform hover:-translate-y-[5px] overflow-hidden transition-all duration-300 cursor-grab "
            src="https://jubelio-store.s3.ap-southeast-1.amazonaws.com/sarungindonesia/2024/02/23033427/3ea9ce5a-ca9d-4993-9521-0154aaf3816b-300x300.jpg"
            alt=""
          />
        </div>
        <div className="overflow-hidden miniLarge:h-28 -z-10">
          <img
            className="opacity-[0.5] hover:opacity-100 -mb-[5px] hover:transform hover:-translate-y-[5px] overflow-hidden transition-all duration-300 cursor-grab"
            src="https://jubelio-store.s3.ap-southeast-1.amazonaws.com/sarungindonesia/2024/02/23033430/9f6678c6-e8ed-47d1-9f89-261da8f576ec-300x300.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="large:min-w-[380px]">
        <p className="text-[rgba(102,102,102,0.7)] mt-2">SARUNG</p>
        <p className="text-2xl large:font-[400] phone:w-[380px] medium:w-full medium:font-[500] desktop:text-[28px] miniLarge:text-3xl miniMedium:w-[440px]">
          Sarung ATLAS Favorit Simalungun Biru Abu
        </p>
        <div className="bg-[#ed1c24] h-[3px] w-8 mt-4"></div>
        <div className="flex gap-10 font-[sans-serif]">
          <p className="text-[#ed1c24] text-[26px] text-2xl font-bold mt-2">
            <a
              className="text-lg no-underline text-[#ed1c24] align-top"
              href=""
            >
              Rp
            </a>{" "}
            176.094
          </p>
        </div>
        <p className="text-[#7a9c59] font-bold text-[13px] mb-2 mt-2">
          Stok 98
        </p>
        <div className="miniMedium:flex miniMedium:gap-8 mt-5 miniMedium:items-center">
          <div className="flex items-center">
            <button
              onClick={decrease}
              className="border-[rgba(0,0,0,0.09)] border-[1px] hover:bg-[rgba(0,0,0,0.05)] cursor-pointer transition-all duration-300 rounded-tl-full rounded-bl-full bg-[rgba(0,0,0,0.03)] p-2"
            >
              -
            </button>
            <input
              type="number"
              min="1"
              max="98"
              value={count}
              onChange={(e) => setCount(e.target.value)}
              className="w-11 quantity outline-none appearance-none  border-[rgba(0,0,0,0.09)] text-center border-[1px] py-2 bg-[rgba(0,0,0,0.03)]"
            />

            <button
              onClick={increase}
              className="border-[rgba(0,0,0,0.09)] hover:bg-[rgba(0,0,0,0.05)] cursor-pointer transition-all duration-300  border-[1px] rounded-tr-full rounded-br-full bg-[rgba(0,0,0,0.03)] p-2"
            >
              +
            </button>
          </div>

          <button className="bg-[#b20000] duration-300 transition-all hover:bg-[rgb(107,0,62)] p-2 text-white font-bold rounded-full px-5 mt-4 miniMedium:mt-0">
            TAMBAH KE KERANJANG
          </button>
        </div>
        <div className="border-t-[1px] mt-10">
          <p className="p-1 text-sm">SKU: SR/AS/FIT/SML/0012</p>
          <p className="p-1 text-sm border-t-[1px]">Kategori: Sarung</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
