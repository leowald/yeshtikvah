import Slider from "react-slick";
import "./App.scss";

function App() {
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 5000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 3,
    waitForAnimate: true,
    arrows: false,
    autoplaySpeed: 5000,
  };

  const images = import.meta.env.VITE_IMAGE_PATH;

  return (
    <div class="page-wrapper">
      <section class="static-hero-s2">
        <div class="hero-container">
          <div class="hero-inner">
            <div class="container-fluid">
              <div class="hero-content">
                <div data-swiper-parallax="300" class="slide-title-sub">
                  <h6>There is always hope</h6>
                </div>

                  </p>
                </div>
                <div class="hero-btn">
                  <a href="" class="theme-btn">
                    GET INSPIRED
                  </a>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <a href="" class="theme-btn">
                    INSPIRE OTHERS
                  </a>
                </div>

                <p class="donation">
                  This site has been created as a zechus for a Refuah Shelema
                  for Aryeh Ben Yehudis.
                </p>
              </div>

              <div class="hero-slider-img">
                <img class="bg-img" src={`${images}slider.png`} alt="slider" />
                <div class="feda-slider hero-slider-fade">
                  <Slider {...settings}>
                    <div class="image-item">
                      <img src={`${images}kiviti_blue.png`} alt="kiviti_blue" />
                    </div>
                    <div class="image-item">
                      <img src={`${images}kiviti_blue.png`} alt="kiviti_blue" />
                    </div>
                    <div class="image-item">
                      <img
                        src={`${images}kiviti_green.png`}
                        alt="kiviti_green"
                      />
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
