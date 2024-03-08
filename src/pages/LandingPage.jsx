import Banner from '../components/molecules/Banner';
import Carousel from '../components/organisms/Carousel';
import LandingPageTemplate from '../components/templates/LandingPageTemplate';

const LandingPage = () => {
  const imgSlides= [
    "https://jubelio-store.s3.ap-southeast-1.amazonaws.com/sarungindonesia/2024/02/20012809/Dashboard-SI-16-1400x738.jpg",
    "https://jubelio-store.s3.ap-southeast-1.amazonaws.com/sarungindonesia/2024/01/05015231/Diskon-Up-To-50-a-1-1400x739.jpg",
    "https://jubelio-store.s3.ap-southeast-1.amazonaws.com/sarungindonesia/2024/02/13070458/Dashboard-SI-2-1400x739.jpg",
    "https://jubelio-store.s3.ap-southeast-1.amazonaws.com/sarungindonesia/2023/06/01090100/Dashboard-SI-1-min-1400x739.jpg"
  ]

  return (
    <LandingPageTemplate>
      <div className='my-8'>
          <Carousel>
        {imgSlides.map((slides, i) => (
          <img src={slides} key={i} />
        ))}

          </Carousel>
        
      </div>
      <div className='banner__wrapper'>
        <Banner
          bglink={
            'bg-banner1'
          }
          word1={'BEST HANDMADE PRODUCT'}
          word2={
            'Luxurious with every step. Detailed craftsmanship original and unique'
          }
        />
        <Banner
          bglink={
            'bg-banner2'
          }
          word1={'RELAXED OUTFITS'}
          word2={'Super Color, Super Density, Super Comfort'}
        />
      </div>
    </LandingPageTemplate>
  );
};

export default LandingPage;
