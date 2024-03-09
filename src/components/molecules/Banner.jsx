function Banner({bglink, word1, word2}) {
  return (
    <div className={`mb-10 `}>
      <div className={`h-[500px] flex flex-col items-center justify-end  ${bglink} bg-cover bg-no-repeat  bg-center`}>
        <div className="flex flex-col items-center justify-center text-[#f1f1f1] mb-10">
          <h1 className="text-[32px] my-2 text-center">{word1}</h1>
          <p className="text-[16px] my-4 text-center">{word2}</p>
          
          <a href="/list-product/sarung" className=" flex justify-center items-center border-2 border-solid border-white px-4 h-9">
            <button>
              <span className="font-bold text-[16px]">SHOP NOW</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Banner