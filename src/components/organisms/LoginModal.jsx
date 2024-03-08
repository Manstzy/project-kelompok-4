import { IoClose } from 'react-icons/io5';
import LoginForm from '../molecules/LoginForm';

function LoginModal(props) {
  const {setIsModalShow} = props
  // const [loginMenu, setLoginMenu] = useState(false);

  // const handleLoginMenu = () => {
  //   setLoginMenu(true);
  //   console.log(loginMenu);
  // };

  // const handleLoginMenuCls = () => {
  //   setLoginMenu(false);
  // };
  document.body.style.overflow = 'hidden';
  return (
    <div>
      <div className="fixed h-full w-screen p-8 top-0 bg-black/50 z-20 flex justify-center items-center overflow-y-auto">
        <button className="absolute top-0 right-0" onClick={setIsModalShow}>
          <IoClose className="text-white opacity-50 hover:opacity-100 text-4xl" />
        </button>
        {/* <div className="relative h-full w-full flex justify-center items-center">
          <div className="max-w-[845px] px-5 py-8 top-0 absolute large:static bg-white flex flex-col large:flex-row">
            <div className="w-full large:w-1/2 px-8 mb-6">
              <h3 className="text-xl mb-[10px]">MASUK</h3>
              <div>
                <form action="">
                  <div className="mb-2">
                    <label
                      htmlFor="email-input-log"
                      className="block mb-1 font-semibold"
                    >
                      Nama pengguna atau alamat email
                    </label>
                    <input
                      id="email-input-log"
                      type="email"
                      className="border-2 block w-full px-3 mb-4"
                    />
                  </div>
                  <div className="mb-2">
                    <label htmlFor="pass-input-log" className="block mb-1">
                      Kata Sandi
                    </label>
                    <input
                      id="pass-input-log"
                      type="password"
                      className="border-2 block w-full pl-3 pr-8 mb-4"
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      id="forget-check"
                      type="checkbox"
                      className="border-2 mr-3"
                    />
                    <label htmlFor="forget-check">Ingat saya</label>
                  </div>

                  <button className="block w-24 h-10 bg-[#ED1C24] text-white mb-2">
                    MASUK
                  </button>
                  <a href="">Kehilangan kata sandi?</a>
                </form>
              </div>
            </div>
            <div className="w-full px-8 large:w-1/2">
              <h3 className="text-xl mb-[10px]">DAFTAR</h3>
              <div>
                <form action="">
                  <div className="mb-2">
                    <label htmlFor="email-input-reg" className="block mb-1">
                      Alamat email
                    </label>
                    <input
                      id="email-input-reg"
                      type="email"
                      className="border-2 block w-full px-3 mb-4"
                    />
                  </div>
                  <div className="mb-2">
                    <label htmlFor="pass-input-reg" className="block mb-1">
                      Kata Sandi
                    </label>
                    <input
                      id="pass-input-reg"
                      type="password"
                      className="border-2 block w-full pl-3 pr-8 mb-4"
                    />
                  </div>
                  <div className="mb-4 text-sm">
                    <p>
                      Your personal data will be used to support your experience
                      throughout this website, to manage access to your account,
                      and for other purposes described in our kebijakan privasi.
                    </p>
                  </div>

                  <button className="block w-24 h-10 bg-[#ED1C24] text-white mb-2">
                    DAFTAR
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div> */}
        <LoginForm/>
      </div>
    </div>
  );
}

export default LoginModal;
