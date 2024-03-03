import { useState } from "react";
import "../../src/index.css";

export default function SidebarMenu() {
  const [isShow, setIsShow] = useState("");

  return (
    <>
      <div className="container">
        <section>
          <span>
            <h4>product categories</h4>
          </span>
          <div className="redlist" />
          <div className="sidebar-menu">
            {/* SPREI */}
            <div className="sprei">
              <a href="#">Sprei</a>
              <button
                onClick={() => setIsShow(!isShow)}
                className={isShow && "active"}>
                HH
              </button>
              {isShow && (
                <div className="sprei-submenu">
                  <p>Sprei atlas premium</p>
                </div>
              )}
            </div>
            {/* FASHION ANAK */}
            <div className="fashion-anak">
              <a href="#">Fashion anak</a>
              <button
                onClick={() => setIsShow(!isShow)}
                className={isShow && "active"}>
                HH
              </button>
              {isShow && (
                <div className="fashion-anak-submenu">
                  <a href="">Busana muslim</a>
                </div>
              )}
            </div>
            {/* FASHION PRIA */}
            <div className="fashion-pria">
              <a href="#">Fashion pria</a>
              <button
                onClick={() => setIsShow(!isShow)}
                className={isShow && "active"}>
                HH
              </button>
              {isShow && (
                <div className="fashion-pria-submenu">
                  <a href="">Baju muslim &amp; Perlengkapan sholat</a>
                </div>
              )}
            </div>
            {/* PRODUK LAINNYA */}
            <div className="produk-lainnya">
              <a href="#">Produk lainnya</a>
            </div>
            {/* SARUNG */}
            <div className="sarung">
              <a href="#">Sarung</a>
              <button
                onClick={() => setIsShow(!isShow)}
                className={isShow && "active"}>
                HH
              </button>
              {isShow && (
                <div className="sarung-submenu">
                  <div>
                    <a href="">Atlas kembang dobby</a>
                  </div>
                  <div>
                    <a href="">Atlas sarung batik</a>
                  </div>
                </div>
              )}
            </div>
            {/* BAJU MUSLIM */}
            <div className="baju-muslim">
              <a href="#">Baju muslim</a>
              <button
                onClick={() => setIsShow(!isShow)}
                className={isShow && "active"}>
                HH
              </button>
              {isShow && (
                <div className="baju-muslm-submenu">
                  <div>
                    <a href="">Atlas super</a>
                  </div>
                  <div>
                    <a href="">Atlas universal</a>
                  </div>
                  <div>
                    <a href="">BHS classic</a>
                  </div>
                  <div>
                    <a href="">BHS masterpiece</a>
                  </div>
                </div>
              )}
            </div>
            {/* SONGKOK */}
            <div className="songkok">
              <a href="">Songkok</a>
              <button
                onClick={() => setIsShow(!isShow)}
                className={isShow && "active"}>
                HH
              </button>
              {isShow && (
                <div className="songkok-submenu">
                  <div>
                    <a href="">BHS royal</a>
                  </div>
                  <div>
                    <a href="">Songkok atlas premium AC</a>
                  </div>
                  <div>
                    <a href="">BHS classic</a>
                  </div>
                </div>
              )}
            </div>
            {/* SUBAIYAH */}
            <div className="subaiyah">
              <a href="">Subaiyah</a>
              <button
                onClick={() => setIsShow(!isShow)}
                className={isShow && "active"}>
                HH
              </button>
              {isShow && (
                <div className="subaiyah-submenu">
                  <a href="">Atlas subaiyah</a>
                </div>
              )}
            </div>
            {/* KAIN BATIK */}
            <div className="kain-batik">
              <a href="#">Kain batik</a>
              <button
                onClick={() => setIsShow(!isShow)}
                className={isShow && "active"}>
                HH
              </button>
              {isShow && (
                <div className="kain-batik-submenu">
                  <a href="">BHS signature</a>
                </div>
              )}
            </div>
            {/* GROSIR */}
            <div className="grosir">
              <a href="#">Grosir</a>
              <button
                onClick={() => setIsShow(!isShow)}
                className={isShow && "active"}>
                HH
              </button>
              {isShow && (
                <div className="grosir-submenu">
                  <div>
                    <a href="">Atlas super premium</a>
                  </div>
                  <div>
                    <a href="">Atlas idaman</a>
                  </div>
                  <div>
                    <a href="">Atlas super</a>
                  </div>
                  <div>
                    <a href="">Atlas favorit</a>
                  </div>
                  <div>
                    <a href="">Atlas premium</a>
                  </div>
                  <div>
                    <a href="">Atlas legenda</a>
                  </div>
                  <div>
                    <a href="">BHS classic</a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
