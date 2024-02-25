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
    <div className="px-4 py-12">
      <div className="grid grid-cols-4 gap-4">
        <img
          className="col-span-4"
          src="https://jubelio-store.s3.ap-southeast-1.amazonaws.com/sarungindonesia/2024/02/23033414/c93b88e0-65be-4942-8726-a4dac881f54b-800x800.jpg"
          alt=""
        />
        <img
          className=""
          src="https://jubelio-store.s3.ap-southeast-1.amazonaws.com/sarungindonesia/2024/02/23033414/c93b88e0-65be-4942-8726-a4dac881f54b-800x800.jpg"
          alt=""
        />
        <img
          className=""
          src="https://jubelio-store.s3.ap-southeast-1.amazonaws.com/sarungindonesia/2024/02/23033424/d0100a56-dce9-46bf-8e99-1abd16060c15-300x300.jpg"
          alt=""
        />
        <img
          className=""
          src="https://jubelio-store.s3.ap-southeast-1.amazonaws.com/sarungindonesia/2024/02/23033427/3ea9ce5a-ca9d-4993-9521-0154aaf3816b-300x300.jpg"
          alt=""
        />
        <img
          className=""
          src="https://jubelio-store.s3.ap-southeast-1.amazonaws.com/sarungindonesia/2024/02/23033430/9f6678c6-e8ed-47d1-9f89-261da8f576ec-300x300.jpg"
          alt=""
        />
      </div>
      <p className="text-[rgba(102,102,102,0.7)] mt-2">SARUNG</p>
      <p className="text-2xl">Sarung ATLAS Favorit Simalungun Biru Abu</p>
      <div className="bg-[#ed1c24] h-1 w-8 mt-4"></div>
      <div className="flex gap-10 font-[sans-serif]">
        <p className="text-[#ed1c24] text-[26px] font-bold mt-2">
          <a
            className="text-[0.7em] no-underline text-[#ed1c24] align-top mt-[0.5em]"
            href=""
          >
            Rp
          </a>{" "}
          176.094
        </p>
      </div>
      <p className="text-[#7a9c59] font-bold">Stok 98</p>
      <div className="flex items-center">
        <button
          onClick={increase}
          className="border-[rgba(0,0,0,0.09)] border-[1px] rounded-tl-full rounded-bl-full bg-[rgba(0,0,0,0.03)] p-2"
        >
          +
        </button>
        <input
          type="number"
          min="1"
          max="98"
          value={count}
          onChange={(e) => setCount(e.target.value) }
          className="w-11 quantity outline-none appearance-none border-[rgba(0,0,0,0.09)] text-center border-[1px] p-2 bg-[rgba(0,0,0,0.03)]"
        />

        <button
          onClick={decrease}
          className="border-[rgba(0,0,0,0.09)]  border-[1px] rounded-tr-full rounded-br-full bg-[rgba(0,0,0,0.03)] p-2"
        >
          -
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
