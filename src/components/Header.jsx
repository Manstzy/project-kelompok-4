import {
  BsCart,
  BsEnvelope,
  BsFillTelephoneFill,
  BsHeartFill,
} from 'react-icons/bs';
import { IoSearch } from 'react-icons/io5';
import { FaRegClock } from 'react-icons/fa';

const Header = () => {
  return (
    <>
      <header className=" large:hidden">
        <p className=" border-2 border-green-400 flex justify-center">
          ADD ANYTHING HERE OR JUST REMOVE IT
        </p>
        <nav className="flex items-center justify-between px-[15px]">
          <div className="burger cursor-pointer">
            <img src="./images/burger-icon.svg" alt="" />
          </div>
          <img
            src="https://sarungindonesia.co.id/wp-content/uploads/2020/06/SI_LOGO-1400x276.png"
            alt="sarung-indonesia-logo"
            className="w-[300px] h-[60px] cursor-pointer"
          />
          <div className="cart">
            <img src="./images/cart-icon.svg" alt="" />
          </div>
        </nav>
      </header>
      <header className=' hidden large:block'>
        <nav className=" px-4">
          <div className="nav___top flex justify-between py-2 text-grey-thin text-sm">
            <ul className="flex divide-x items-center">
              <li className="flex mr-3 hover:text-[hsla(0,0%,7%,.85)]">
                <a
                  href="mailto:cs@sarungindonesia.co.id"
                  className="flex items-center gap-2"
                >
                  <BsEnvelope className="w-4 h-5" />
                  <span>CONTACT</span>
                </a>
              </li>
              <li className="flex items-center px-3 gap-2 hover:text-[hsla(0,0%,7%,.85)]">
                <FaRegClock className="w-4 h-4" />
                <span>08:00 - 17:00</span>
              </li>
              <li className="flex pl-3 hover:text-[hsla(0,0%,7%,.85)]">
                <a
                  href="tel:+62-858-0840-0251"
                  className="flex items-center gap-2"
                >
                  <BsFillTelephoneFill className="w-4 h-4" />
                  <span>+62-858-0840-0251</span>
                </a>
              </li>
            </ul>
            <ul className="flex divide-x items-center">
              <li className=" mr-3 hover:text-[hsla(0,0%,7%,.85)]">
                <a href="">
                  <span>Masuk / Daftar</span>
                </a>
              </li>
              <li className=" px-3 hover:text-[hsla(0,0%,7%,.85)]">
                <a href="" className='flex items-center gap-2'>
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
          <div className="nav___mid grid grid-cols-3 items-center justify-end">
            <div></div>
            <a href="" className="flex justify-center">
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
          <div className="nav___bottom font-bold text-sm tracking-wide py-3">
            <ul className="flex flex-row justify-center flex-wrap gap-4  ">
              <li>
                <a href="" className="link-hover">
                  SARUNG
                </a>
              </li>
              <li>
                <a href="" className="link-hover">
                  BAJU MUSLIM
                </a>
              </li>
              <li>
                <a href="" className="link-hover">
                  SONGKOK
                </a>
              </li>
              <li>
                <a href="" className="link-hover">
                  SUBAIYAH
                </a>
              </li>
              <li>
                <a href="" className="link-hover">
                  KAIN BATIK
                </a>
              </li>
              <li>
                <a href="" className="link-hover">
                  SPREI
                </a>
              </li>
              <li>
                <a href="" className="link-hover">
                  KAIN GROSIR
                </a>
              </li>
              <li>
                <a href="" className="link-hover">
                  PRODUK LAINNYA
                </a>
              </li>
              <li>
                <a href="" className="link-hover">
                  DROP SHIPPER/RESELLLER
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
