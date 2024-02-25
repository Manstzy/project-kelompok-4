const Header = () => {
  return (
    <>
      <header className="">
        <p className=" border-2 border-green-400 flex justify-center">ADD ANYTHING HERE OR JUST REMOVE IT</p>
        <nav className="flex items-center justify-between px-[15px]">
          <div className="burger cursor-pointer">
            <img src="./public/images/burger-icon.svg" alt="" />
          </div>
          <img src="https://sarungindonesia.co.id/wp-content/uploads/2020/06/SI_LOGO-1400x276.png" alt="sarung-indonesia-logo" className="w-[300px] h-[60px] cursor-pointer" />
          <div className="cart">
            <img src="./public/images/cart-icon.svg" alt="" />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
