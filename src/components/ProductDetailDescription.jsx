import { useState } from 'react';
import { FaEnvelope, FaFacebook, FaTwitter, FaWhatsapp } from 'react-icons/fa';

export const ProductDetailDescription = () => {
  const [changeTab, setChangeTab] = useState(false);

  const handleDesc = () => {
    setChangeTab(false);
    console.log(changeTab);
  };

  const handleInfo = () => {
    setChangeTab(true);
    console.log(changeTab);
  };

  return (
    <div className="max-w-[1060px] m-auto py-8 px-4">
      <nav className="flex justify-center gap-4 py-3 font-semibold text-grey-thin">
        <div className="cursor-pointer hover:text-black" onClick={handleDesc}>
          DESKRIPSI
        </div>
        <div
          className="cursor-pointer hover:text-black focus:text-black"
          onClick={handleInfo}
        >
          INFORMASI TAMBAHAN
        </div>
      </nav>
      <section
        className={
          changeTab == false ? 'description__content pt-4 block' : 'hidden'
        }
      >
        <p className="mb-5">
          Tampil stylish dan islami dengan Baju Muslim ATLAS Universal
        </p>
        <p className="mb-5">
          Baju Muslim ATLAS Universal merupakan baju muslim dengan desain
          stylish, eksklusif dan elegan. Baju muslim ini hadir dengan motif
          istimewa nuansa islami serta dipadukan dengan warna-warna dinamis dan
          kekinian.{' '}
        </p>
        <p className="mb-5">
          Diproduksi oleh PT. Behaestex yang merupakan perusahaan tekstil
          penghasil sarung terbaik di Indonesia. Produk unggulan dari PT
          Behaestex adalah sarung tenun BHS yang telah dikenal sebagai sarung
          tenun terbaik sejak tahun 1953.
        </p>
        <p className="mb-5">Kelebihan:</p>
        <p className="mb-5">Perpaduan warna yang tepat serta tahan lama</p>
        <p className="mb-5">Kerapatan bahan yang sempurna berkelas dunia</p>
        <p className="mb-5">
          Tekstur kain halus sehingga memberikan kenyamanan ekstra untuk segala
          aktifitas
        </p>
        <p className="mb-5">
          Sangat cocok untuk kegiatan ibadah, kegiatan resmi, maupun aktifitas
          sehari-hari
        </p>
        <p className="mb-5">Ukuran Long Sleeve: </p>
        <p className="mb-5">
          Panjang Badan x Lebar Dada x Lebar Pundak x Panjang Lengan
        </p>
        <p className="mb-5">
          <ul>
            <li>- S (73 cm x 53,5 cm x 46 cm x 24 cm)</li>
            <li>- M (74 cm x 55,5 cm x 48 cm x 25 cm)</li>
            <li>- L (75 cm x 57,5 cm x 50 cm x 26 cm)</li>
            <li>- XL (76 cm x 59,5 cm x 52 cm x 27 cm)</li>
            <li>- XXL (77cm x 61,5 cm x 54 cm x 28 cm)</li>
          </ul>
        </p>
        <p className="mb-5">Cara perawatan / cuci:</p>
        <p className="mb-5">
          Gunakan air dingin untuk mencuci baju dan selalu posisikan bagian
          dalam menjadi di luar ketika dicuci. Ketika sudah bersih, keringkan
          dulu menggunakan mesin pengering. Jemur baju di tempat yang teduh dan
          hindarkan dari paparan sinar matahari langsung. Begitu kering, angkat,
          lipat, dan simpan baju muslim di tempat yang dingin dan kering.
        </p>
        <p className="mb-5">
          Dapatkan baju muslim berkualitas ini dengan klik tombol “Beli”.
        </p>
        <p className="mb-5">
          Stock tersedia selama produk ini live di etalase penjualan kami.
        </p>
        <p className="mb-5">
          Transaksi yang masuk sebelum jam 15.00 WIB akan dikirim pada hari yang
          sama. Transaksi yang tidak menggunakan kode resi otomatis, update resi
          maksimal H+1 setelah pesanan dikirim. Untuk hari Sabtu dan Ahad/hari
          libur pengiriman akan dilakukan pada hari berikutnya.
        </p>
        <p className="mb-5">Atlas, Inspiring the World</p>
      </section>
      <section className={
          changeTab == true ? 'description__content pt-4 block' : 'hidden'
        }>
        <table className=" text-left w-full">
          <tr className=' border-b-2'>
            <th className=' w-3/12'>BERAT</th>
            <td>600 gram</td>
          </tr>
          {/* <hr className='w-full'/> */}
          <tr className=' border-b-2'>
            <th>DIMENSI</th>
            <td>31,0000 x 20,0000 x 6,0000 cm</td>
          </tr>
          <tr className=' border-b-2'>
            <th>SIZE</th>
            <td>L, M, XL</td>
          </tr>
        </table>
      </section>
      <section className="share-icons flex flex-row items-center gap-3 my-4">
        <div className=" w-9 h-9 flex justify-center items-center rounded bg-[#4267B2]">
          <FaFacebook className="text-2xl text-white" />
        </div>
        <div className=" w-9 h-9 flex justify-center items-center rounded bg-[#1DA1F2]">
          <FaTwitter className="text-2xl text-white" />
        </div>
        <div className=" w-9 h-9 flex justify-center items-center rounded bg-[#25D366]">
          <FaWhatsapp className=" text-2xl text-white" />
        </div>
        <div className=" w-9 h-9 flex justify-center items-center rounded bg-gray-500">
          <FaEnvelope className=" text-2xl text-white" />
        </div>
        <div className=" text-3xl ">
          <a>Bagikan</a>
        </div>
      </section>
    </div>
  );
};
