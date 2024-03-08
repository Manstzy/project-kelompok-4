import {
  BsCart,
  BsEnvelope,
  BsFillTelephoneFill,
  BsHeartFill,
} from 'react-icons/bs';
import { IoClose, IoMenu, IoSearch } from 'react-icons/io5';
import {
  FaFacebookF,
  FaInstagram,
  FaRegClock,
  FaTwitter,
} from 'react-icons/fa';
import { useState } from 'react';
import LoginModal from '../components/organisms/LoginModal';

const Header = () => {
  const [menu, setMenu] = useState(false);
  const [isModalShow, setIsModalShow] = useState(false);
  // const [loginMenu, setLoginMenu]= useState(false)

  // const handleLoginMenu =() => {
  //   setLoginMenu(true)
  // }

  const handleMenu = () => {
    setMenu(true);
    console.log(menu);
  };

  const handleMenuCls = () => {
    setMenu(false);
  };

  {
    menu == true
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'visible');
  }

  return (
    <>
      {/* MOBILE HEADER START */}
      <header className=" flex flex-wrap justify-center large:hidden sticky z-20">
        <strong className=" flex justify-center text-xs tracking-wider h-8 items-center">
          ADD ANYTHING HERE OR JUST REMOVE IT...
        </strong>
        <nav className="flex items-center justify-between px-[15px]">
          <div className="burger cursor-pointer" onClick={handleMenu}>
            <IoMenu className="text-3xl" />
          </div>
          <div
            className={
              menu == false
                ? 'fixed h-full w-screen bg-black/50 top-0 right-0 hidden -translate-x-full transition-transform'
                : ' fixed h-full w-screen bg-black/50 top-0 right-0 block transition-transform translate-x-0'
            }
          >
            <button className="right-0 absolute" onClick={handleMenuCls}>
              <IoClose className="text-white opacity-50 hover:opacity-100 text-4xl" />
            </button>
            <div className="flex flex-col justify-start h-full max-w-72 bg-white left-0 top-0 absolute p-8 gap-5 overflow-y-scroll">
              <div className="w-full">
                <form
                  action="search"
                  className="flex justify-end border-[1px] h-8 items-center rounded-full px-3 w-full justify-self-end bg-[rgba(0,0,0,.03)] text-sm"
                >
                  <input
                    type="text"
                    placeholder="Cari Produk..."
                    className="w-full outline-none decoration-none bg-transparent placeholder:text-sm placeholder:text-[#666666D9]"
                  />
                  <button className="bg-transparent">
                    <IoSearch className="w-5 h-5" />
                  </button>
                </form>
              </div>
              <div className=" text-grey-thin font-bold text-sm">
                <ul className="flex flex-col gap-4 text-wrap">
                  <li>
                    <span>
                      <a href="/list-product">SARUNG</a>
                    </span>
                  </li>
                  <li>
                    <span>
                      <a href="/list-product">BAJU MUSLIM</a>
                    </span>
                  </li>
                  <li>
                    <span>
                      <a href="/list-product">SONGKOK</a>
                    </span>
                  </li>
                  <li>
                    <span>
                      <a href="/list-product">SUBAIYAH</a>
                    </span>
                  </li>
                  <li>
                    <span>
                      <a href="/list-product">KAIN BATIK</a>
                    </span>
                  </li>
                  <li>
                    <span>
                      <a href="/list-product">SPREI</a>
                    </span>
                  </li>
                  <li>
                    <span>
                      <a href="/list-product">GROSIR</a>
                    </span>
                  </li>
                  <li>
                    <span>
                      <a href="/list-product">PRODUK LAINNYA</a>
                    </span>
                  </li>
                  <li>
                    <span>
                      <a href="/list-product">DROPSHIPPER/RESELLER</a>
                    </span>
                  </li>
                  <li>
                    <span>
                      <a href="/my-account"> MASUK</a>
                    </span>
                  </li>
                  <li>
                    <span>
                      <a href="" className="flex items-center gap-2">
                        {' '}
                        <BsEnvelope className="text-xl" />
                        NEWSLETTER
                      </a>
                    </span>
                  </li>
                  <li>
                    <span className="flex gap-2">
                      <a href="">
                        <FaFacebookF className="text-xl" />
                      </a>
                      <a href="">
                        <FaInstagram className="text-xl" />
                      </a>
                      <a href="">
                        <FaTwitter className="text-xl" />
                      </a>
                      <a href="">
                        <BsEnvelope className="text-xl" />
                      </a>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <a href="/" className="flex justify-center items-center">
            <img
              src="https://sarungindonesia.co.id/wp-content/uploads/2020/06/SI_LOGO-1400x276.png"
              alt="sarung-indonesia-logo"
              className="w-1/2 h-auto"
            />
          </a>
          <div className="cart">
            <BsCart className="text-3xl text-[#ED1C24] cursor-pointer" />
          </div>
        </nav>
      </header>
      {/* MOBILE HEADER END */}

      {/* DESKTOP HEADER START */}
      <header className=" hidden large:block sticky top-0 z-20">
        <nav className=" px-4">
          {/* NAV TOP START */}
          <div className="nav___top flex justify-between py-2 text-grey-thin text-sm bg-opacity-90 bg-white">
            <ul className="flex divide-x items-center">
              <li className="flex mr-3 hover:text-[hsla(0,0%,7%,.85)]">
                <a
                  href="mailto:cs@sarungindonesia.co.id"
                  className="flex items-center gap-2"
                >
                  <BsEnvelope className="text-base" />
                  <span>CONTACT</span>
                </a>
              </li>
              <li className="flex items-center px-3 gap-2 hover:text-[hsla(0,0%,7%,.85)]">
                <FaRegClock className="text-base" />
                <span>08:00 - 17:00</span>
              </li>
              <li className="flex pl-3 hover:text-[hsla(0,0%,7%,.85)]">
                <a
                  href="tel:+62-858-0840-0251"
                  className="flex items-center gap-2"
                >
                  <BsFillTelephoneFill className="text-base" />
                  <span>+62-858-0840-0251</span>
                </a>
              </li>
            </ul>
            <ul className="flex divide-x items-center">
              <li
                className=" mr-3 hover:text-[hsla(0,0%,7%,.85)] cursor-pointer"
                onClick={() => setIsModalShow(true)}
              >
                <span>Masuk / Daftar</span>
              </li>
              <li className=" px-3 hover:text-[hsla(0,0%,7%,.85)]">
                <a href="" className="flex items-center gap-2">
                  <span>Favorite</span>
                  <BsHeartFill />
                </a>
              </li>
              <li className="pl-3 hover:text-[hsla(0,0%,7%,.85)]">
                <a href="" className="flex gap-2 items-center">
                  <p>
                    Keranjang / <span>Rp 0</span>
                  </p>
                  <BsCart className="w-6 h-6 text-[#ED1C24]" />
                </a>
              </li>
            </ul>
          </div>
          {/* NAV TOP END */}

          {/* NAV MID START */}
          <div className="nav___mid grid grid-cols-3 items-center justify-end bg-white bg-opacity-90">
            <div></div>
            <a href="/" className="flex justify-center">
              <img
                src="https://sarungindonesia.co.id/wp-content/uploads/2020/06/SI_LOGO-1400x276.png"
                alt=""
                className=" w-[300px] h-[60px]"
              />
            </a>
            <form
              action="search"
              className="flex justify-end border-[1px] h-8 items-center rounded-full px-3 w-[80%] justify-self-end bg-[rgba(0,0,0,.03)] text-sm"
            >
              <input
                type="text"
                placeholder="Cari Produk..."
                className="w-full outline-none decoration-none bg-transparent placeholder:text-sm placeholder:text-[#666666D9]"
              />
              <button className="bg-transparent">
                <IoSearch className="w-5 h-5" />
              </button>
            </form>
          </div>
          {/* NAV MID END */}

          {/* NAV BOTTOM START */}
          <div className="nav___bottom font-bold text-sm tracking-wide py-3 bg-white bg-opacity-100">
            <ul className="flex flex-row justify-center flex-wrap gap-4  ">
              <li>
                <a href="/list-product" className="link-hover">
                  SARUNG
                </a>
              </li>
              <li>
                <a href="/list-product" className="link-hover">
                  BAJU MUSLIM
                </a>
              </li>
              <li>
                <a href="/list-product" className="link-hover">
                  SONGKOK
                </a>
              </li>
              <li>
                <a href="/list-product" className="link-hover">
                  SUBAIYAH
                </a>
              </li>
              <li>
                <a href="/list-product" className="link-hover">
                  KAIN BATIK
                </a>
              </li>
              <li>
                <a href="/list-product" className="link-hover">
                  SPREI
                </a>
              </li>
              <li>
                <a href="/list-product" className="link-hover">
                  KAIN GROSIR
                </a>
              </li>
              <li>
                <a href="/list-product" className="link-hover">
                  PRODUK LAINNYA
                </a>
              </li>
              <li>
                <a href="/list-product" className="link-hover">
                  DROP SHIPPER/RESELLLER
                </a>
              </li>
            </ul>
          </div>
          {/* NAV BOTTOM END */}
        </nav>
      </header>
      {/* DESKTOP HEADER END */}

      {/* LOGIN MODAL START */}
      {isModalShow && (
        <LoginModal setIsModalShow={() => setIsModalShow(false)} />
      )}
      {/* LOGIN MODAL END */}
    </>
  );
};

export default Header;
