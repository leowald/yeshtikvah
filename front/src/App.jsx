import Provider from "./providers/Provider";
import Slider from "react-slick";
import "./App.scss";
import Button from "./components/Button";
import Card from "./components/Card";
import Icon from "./components/Icon";

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
  function click() {
    console.log("clicked");
  }

  return (
    <Provider>
      <div class="page-wrapper">
        <Icon
          bottomIcon={{ color: "red" }}
          topIcon={{ color: "white", name: "fa-house", type: "fas" }}
          size="7"
          opacity="80%"
        ></Icon>
        <header id="header">
          <Card></Card>
          <Button
            icon={{
              bottomIcon: { color: "red" },
              topIcon: { color: "white", name: "fa-house", type: "fas" },
              size: "2",
              opacity: "90%",
            }}
            btnText="blue button"
            onClick={click}
            backgroundColor="blue"
            size="sm"
            outline={true}
            type="warning"
          ></Button>
          <Button
            btnText="green button"
            onClick={click}
            backgroundColor={{
              sideCorner: "180deg",
              colors: [
                { color: "#00a7d5", deg: "40%" },
                { color: "#00ded8", deg: "120%" },
              ],
            }}
          ></Button>
          <Button
            btnText="red button"
            onClick={click}
            backgroundColor="red"
            size="sm"
            type="info"
          ></Button>
          <Button
            btnText="red button"
            onClick={click}
            backgroundColor="red"
            size="lg"
          ></Button>
          <div class="wpo-site-header wpo-site-header-s1 wpo-site-header-s2">
            <nav class="navigation navbar navbar-expand-lg navbar-light">
              <div class="container-fluid">
                <div class="row align-items-center">
                  <div class="col-lg-3 col-md-4 col-3 d-lg-none dl-block">
                    <div class="mobail-menu">
                      <button type="button" class="navbar-toggler open-btn">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar first-angle"></span>
                        <span class="icon-bar middle-angle"></span>
                        <span class="icon-bar last-angle"></span>
                      </button>
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-4 col-6">
                    <div class="navbar-header">
                      <a class="navbar-brand" href="index.html">
                        <img src={`${images}logo2.png`} alt="logo" />
                      </a>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-1 col-1">
                    <div
                      id="navbar"
                      class="collapse navbar-collapse navigation-holder"
                    >
                      <button class="menu-close">
                        <i class="ti-close"></i>
                      </button>
                      <ul class="nav navbar-nav mb-2 mb-lg-0">
                        <li class="menu-item-has-children">
                          <a href="#">Stories</a>
                          <ul class="sub-menu">
                            <li>
                              <a href="">Children - Fertility</a>
                            </li>
                            <li>
                              <a href="">Children - Raising</a>
                            </li>
                            <li>
                              <a href="">Parnassah</a>
                            </li>
                            <li>
                              <a href="">Health</a>
                            </li>

                            <li>
                              <a href="">Shidduchim</a>
                            </li>
                            <li>
                              <a href="">Misc</a>
                            </li>
                            <li>
                              <a href="">See All</a>
                            </li>
                          </ul>
                        </li>

                        <li class="menu-item-has-children">
                          <a href="#">About</a>
                          <ul class="sub-menu">
                            <li>
                              <a href="">Sources</a>
                            </li>
                            <li>
                              <a href="">Shiurim</a>
                            </li>
                            <li>
                              <a href="">Pesukim</a>
                            </li>
                            <a href="#">FAQ</a>
                          </ul>
                        </li>

                        <li class="menu-item-has-children">
                          <a href="#">Subscribe</a>
                        </li>

                        <li class="menu-item-has-children">
                          <a href="#">Donations</a>
                        </li>

                        <li>
                          <a href="">Contact</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-3 col-2">
                    <div class="header-right">
                      <div class="header-search-form-wrapper">
                        <div class="cart-search-contact">
                          <button class="search-toggle-btn">
                            <i class="fi flaticon-search"></i>
                          </button>
                          <div class="header-search-form">
                            <form>
                              <div>
                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder="Search here..."
                                />
                                <button type="submit">
                                  <i class="fi flaticon-search"></i>
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                      <div class="header-profile-form-wrapper">
                        <button class="profile-toggle-btn">
                          <i class="fi flaticon-profile"></i>
                        </button>
                        <div class="header-profile-content">
                          <ul>
                            <li>
                              <a href="#">Profile</a>
                            </li>
                            <li>
                              <a href="">Login</a>
                            </li>
                            <li>
                              <a href="">Register</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div class="close-form">
                        <a class="theme-btn" href="">
                          <span class="mobile">
                            <i class="fi fa fa-heart"></i>
                          </span>
                          <span class="text">Share your Story</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </header>

        <section class="static-hero-s2">
          <div class="hero-container">
            <div class="hero-inner">
              <div class="container-fluid">
                <div class="hero-content">
                  <div data-swiper-parallax="300" class="slide-title-sub">
                    <h6>There is always hope</h6>
                  </div>
                  <div data-swiper-parallax="300" class="slide-title">
                    <h2>Hashem can do anything.</h2>
                  </div>
                  <div data-swiper-parallax="400" class="slide-text">
                    <p>
                      Our sages teach that when we despair we destroy our chance
                      of salvation.
                    </p>
                    <p>
                      Be inspired and inspire others through personal stories of
                      deliverance in the face of hardships.
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
                  <img
                    class="bg-img"
                    src={`${images}slider.png`}
                    alt="slider"
                  />
                  <div class="feda-slider hero-slider-fade">
                    <Slider {...settings}>
                      <div class="image-item">
                        <img
                          src={`${images}kiviti_blue.png`}
                          alt="kiviti_blue"
                        />
                      </div>
                      <div class="image-item">
                        <img
                          src={`${images}kiviti_blue.png`}
                          alt="kiviti_blue"
                        />
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
    </Provider>
  );
}

export default App;
