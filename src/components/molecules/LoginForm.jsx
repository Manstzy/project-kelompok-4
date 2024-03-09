function LoginForm() {
  return (
    <div className="relative h-full w-full flex justify-center items-center z-10">
      <div className="max-w-[845px] px-5 py-8 absolute top-0  large:static bg-white flex flex-col large:flex-row">
        <div className="w-full large:w-1/2 px-8 mb-6">
          <h3 className="text-xl mb-[10px]">MASUK</h3>
          <div className="text-sm">
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
                  className="border-2 block w-full px-3 h-10 mb-4 shadow-input"
                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor="pass-input-log"
                  className="block mb-1 font-semibold"
                >
                  Kata Sandi
                </label>
                <input
                  id="pass-input-log"
                  type="password"
                  className="border-2 block w-full pl-3 pr-8 mb-4 h-10 shadow-input"
                />
              </div>
              <div className="mb-4 font-semibold">
                <input
                  id="forget-check"
                  type="checkbox"
                  className="border-2 mr-3"
                />
                <label htmlFor="forget-check">Ingat saya</label>
              </div>

              <button className="block w-24 h-10 bg-[#ED1C24] text-white mb-2 font-bold">
                MASUK
              </button>
              <a href="">Kehilangan kata sandi?</a>
            </form>
          </div>
        </div>
        <div className="w-full px-8 large:w-1/2">
          <h3 className="text-xl mb-[10px]">DAFTAR</h3>
          <div className="text-sm">
            <form action="">
              <div className="mb-2">
                <label
                  htmlFor="email-input-reg"
                  className="block mb-1 font-semibold"
                >
                  Alamat email
                </label>
                <input
                  id="email-input-reg"
                  type="email"
                  className="border-2 block w-full px-3 mb-4 h-10 shadow-input"
                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor="pass-input-reg"
                  className="block mb-1 font-semibold"
                >
                  Kata Sandi
                </label>
                <input
                  id="pass-input-reg"
                  type="password"
                  className="border-2 block w-full pl-3 pr-8 mb-4 h-10 shadow-input"
                />
              </div>
              <div className="mb-4 text-sm">
                <p>
                  Your personal data will be used to support your experience
                  throughout this website, to manage access to your account, and
                  for other purposes described in our kebijakan privasi.
                </p>
              </div>

              <button className="block w-24 h-10 bg-[#ED1C24] text-white mb-2 font-bold">
                DAFTAR
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
