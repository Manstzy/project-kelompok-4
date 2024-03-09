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
} from "react-icons/fa";
import { useState } from "react";
import LoginModal from "../components/organisms/LoginModal";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  selectItems,
  selectTotalItems,
  selectTotalPrice,
  removeCart,
  addItemsCart,
} from "../redux/cart/cartSlice";
import SarungLogo from "../../images/logo-sarung.png"

const Header = () => {
  const [menu, setMenu] = useState(false);
  const [isModalShow, setIsModalShow] = useState(false);
  const [modal, setModal] = useState(false);
  const totalPrice = useSelector(selectTotalPrice);
  const totalItems = useSelector(selectTotalItems);
  const Items = useSelector(selectItems);
  const dispatch = useDispatch();

  // console.log(Items)

  const handleModal = () => {
    setModal(!modal);
  };

  const handleRemoveCart = (product) => {
    dispatch(removeCart(product));
  };

  const handleAddToCart = (product) => {
    dispatch(addItemsCart(product));
  };

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
      <div className="header__top large:hidden">
        <strong className=" flex justify-center text-xs tracking-wider h-8 items-center">
          ADD ANYTHING HERE OR JUST REMOVE IT...
        </strong>
      </div>

      <header className="header__master flex flex-wrap justify-center py-2 large:hidden sticky top-0 bg-opacity-90 bg-white z-20 ">
        <nav className="flex items-center justify-between px-[15px] ">
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
            <div className="flex flex-col justify-start h-full max-w-72 bg-white left-0 top-0 absolute p-8 gap-5 overflow-y-auto">
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
                      <Link to="/list-product/sarung">SARUNG</Link>
                    </span>
                  </li>
                  <li>
                    <span>
                      <Link to="/list-product/baju-muslim">BAJU MUSLIM</Link>
                    </span>
                  </li>
                  <li>
                    <span>
                      <Link to="/list-product/songkok">SONGKOK</Link>
                    </span>
                  </li>
                  <li>
                    <span>
                      <Link to="/list-product/subaiyah">SUBAIYAH</Link>
                    </span>
                  </li>
                  <li>
                    <span>
                      <Link to="/list-product/kain-batik">KAIN BATIK</Link>
                    </span>
                  </li>
                  <li>
                    <span>
                      <Link to="/list-product/sprei">SPREI</Link>
                    </span>
                  </li>
                  <li>
                    <span>
                      <Link to="/list-product/grosir">GROSIR</Link>
                    </span>
                  </li>
                  <li>
                    <span>
                      <Link to="/list-product/produk-lainnya">
                        PRODUK LAINNYA
                      </Link>
                    </span>
                  </li>
                  <li>
                    <span>
                      <Link to="/list-product/dropshipper">
                        DROPSHIPPER/RESELLER
                      </Link>
                    </span>
                  </li>
                  <li>
                    <span>
                      <Link to="/my-account"> MASUK</Link>
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
              src={SarungLogo}
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
      {/* NAV TOP START */}
      <div className="nav___top hidden large:flex px-4 justify-between py-2 text-grey-thin text-sm bg-opacity-90 bg-white">
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
            <a href="tel:+62-858-0840-0251" className="flex items-center gap-2">
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
            <div href="" className="flex gap-2 items-center">
              <p>
                Keranjang / <span>Rp {totalPrice}</span>
              </p>
              <div className="relative cursor-pointer">
                <BsCart
                  className="w-6 h-6 text-[#ED1C24] hover:text-red-500"
                  onClick={handleModal}
                />
                <div className="bg-red-400 rounded-full text-white flex items-center justify-center absolute -top-1 -right-1 w-4 h-4 text-[12px]">
                  {totalItems}
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      {/* NAV TOP END */}

      <header className=" hidden large:block sticky top-0 z-20">
        <nav>
          {/* NAV MID START */}
          <div className="nav___mid grid grid-cols-3 px-4 items-center justify-end bg-white bg-opacity-90">
            <div></div>
            <a href="/" className="flex justify-center">
              <img
                src={SarungLogo}
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
          <div className="nav___bottom font-bold px-4 text-sm tracking-wide py-3 bg-white bg-opacity-100">
            <ul className="flex flex-row justify-center flex-wrap gap-4  ">
              <li>
                <Link to="/list-product/sarung" className="link-hover-after">
                  SARUNG
                </Link>
              </li>
              <li>
                <Link to="/list-product/baju-muslim" className="link-hover-after">
                  BAJU MUSLIM
                </Link>
              </li>
              <li>
                <Link to="/list-product/songkok" className="link-hover-after">
                  SONGKOK
                </Link>
              </li>
              <li>
                <Link to="/list-product/subaiyah" className="link-hover-after">
                  SUBAIYAH
                </Link>
              </li>
              <li>
                <Link to="/list-product/kain-batik" className="link-hover-after">
                  KAIN BATIK
                </Link>
              </li>
              <li>
                <Link to="/list-product/sprei" className="link-hover-after">
                  SPREI
                </Link>
              </li>
              <li>
                <Link to="/list-product/grosir" className="link-hover-after">
                  KAIN GROSIR
                </Link>
              </li>
              <li>
                <Link to="/list-product/produk-lainnya" className="link-hover-after">
                  PRODUK LAINNYA
                </Link>
              </li>
              <li>
                <Link to="/list-product/dropshipper" className="link-hover-after">
                  DROPSHIPPER/RESELLER
                </Link>
              </li>
            </ul>
          </div>
          {/* NAV BOTTOM END */}
        </nav>
      </header>
      {/* DESKTOP HEADER END */}

      {/* modal Keranjang */}
      <div
        className={
          modal
            ? "fixed z-50 w-[80%] p-10 right-0 left-0 top-0 bottom-0 my-auto h-[80%] bg-red-400 mx-auto rounded-lg"
            : "hidden"
        }
      >
        <div>
          {Items.map((item) => (
            <div key={item.id}>
              <div className="flex gap-4">
                <div className="mt-2">
                  <img src={item.image} className="w-40 h-40" alt="" />
                </div>
                <div className="mt-2">
                  <p className="font-semibold text-slate-700">{item.title}</p>
                  <p className="">Rp. {item.totalPrice}</p>
                  <p>Jumlah Barang : {item.quantity}</p>
                  <div className="flex gap-4 mt-10 text-white">
                    <button
                      className="rounded-full bg-red-500 px-4 py-1"
                      onClick={() => handleAddToCart(item)}
                    >
                      Tambah
                    </button>
                    <button
                      className="rounded-full bg-red-500 px-4 py-1"
                      onClick={() => handleRemoveCart(item)}
                    >
                      Kurang
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p onClick={handleModal}>Klose</p>
      </div>

      {/* LOGIN MODAL START */}
      {isModalShow && (
        <LoginModal setIsModalShow={() => setIsModalShow(false)} />
      )}
      {/* LOGIN MODAL END */}
    </>
  );
};

export default Header;
