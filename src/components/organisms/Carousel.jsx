import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function Carousel({ children: imgSlides }) {
  const [curr, setCurr] = useState(0);

  const prev = () => {
    setCurr((curr) => (curr === 0 ? imgSlides.length - 1 : curr - 1));
  };
  const next = () => {
    setCurr((curr) => (curr === imgSlides.length - 1 ? 0 : curr + 1));
  };
  console.log(curr);

  return (
    <div className=" overflow-hidden relative">
      <div className="flex transition-transform ease-out duration-500" style={{transform: `translateX(-${curr *100}%)`}}>{imgSlides}</div>
      <div className=" flex justify-between px-4 absolute items-center inset-0 text-grey-thin">
        <button onClick={prev} className="flex justify-center items-center rounded-full size-8 border-2 border-slate-600">
          <FaChevronLeft />
        </button>
        <button onClick={next} className="flex justify-center items-center rounded-full size-8 border-2 border-slate-600">
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
}

export default Carousel;
