import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function Carousel({ children: imgSlides }) {
  const [curr, setCurr] = useState(0);

  const prev = () => {
    setCurr((curr) => (curr === 0 ? imgSlides.length - 1 : curr - 1));
    console.log(imgSlides.length, 'ini imgslides.length prev');
    console.log(curr, 'ini curr prev');
  };
  const next = () => {
    setCurr((curr) => (curr === imgSlides.length - 1 ? 0 : curr + 1));
    console.log(imgSlides.length, 'ini imgslides.length next');
    console.log(curr, 'ini curr next');
  };


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

      <div className='absolute bottom-4 right-0 left-0'>
        <div className='flex items-center justify-center gap-2'>
          {imgSlides.map((_, i) => (
            <div className={`transition-all size-3 border-[3px] border-grey-thin rounded-full ${curr === i? "bg-black border-none":"bg-opacity-50"}`} key={i} /> 
          ))}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
