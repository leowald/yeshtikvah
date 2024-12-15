import { Outlet } from "react-router-dom";

/** This component wraps each page with the same header and footer layout. */

export default function MainLayout() {
  const images = import.meta.env.VITE_IMAGE_PATH;
  return (
    <div>
      <header role="header" id="header">
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
      <Outlet></Outlet>{" "}
      <footer role="footer" class="wpo-site-footer">
        <div class="wpo-top-footer">
          <div class="container">
            <div class="row">
              <div class="col-lg-6 col-md-6 col-sm-6 col-12">
                <div class="widget">
                  <div class="logo">
                    <a class="navbar-brand" href="index.html">
                      <img src="logo2.png" alt="" />
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-6 col-12">
                <div class="widget">
                  <div class="social">
                    <ul>
                      <li>
                        <a href="#">
                          <i class="fi flaticon-facebook-app-symbol"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fi flaticon-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fi flaticon-linkedin"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fi flaticon-instagram"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="wpo-upper-footer">
          <div class="container">
            <div class="row">
              <div class="col col-lg-4 col-md-6 col-12 col-md-6 col-sm-12 col-12">
                <div class="widget link-widget">
                  <div class="widget-title">
                    <h3>Quick Links</h3>
                  </div>
                  <ul>
                    <li>
                      <a href="">Home</a>
                    </li>
                    <li>
                      <a href="">About Us</a>
                    </li>
                    <li>
                      <a href="service.html">Mission & Vision</a>
                    </li>
                    <li>
                      <a href="about.html">Team</a>
                    </li>
                    <li>
                      <a href="about.html">Campaign</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col col-lg-4 col-md-6 col-12 col-md-6 col-sm-12 col-12">
                <div class="widget link-widget s2">
                  <div class="widget-title">
                    <h3>Mission &amp; Vision</h3>
                  </div>
                  <ul>
                    <li>
                      <a href="service-single.html">Economic Estublishment</a>
                    </li>
                    <li>
                      <a href="service-single.html">Jobs & Unemployment</a>
                    </li>
                    <li>
                      <a href="service-single.html">Business & wpo</a>
                    </li>
                    <li>
                      <a href="service-single.html">Roads & Transport</a>
                    </li>
                    <li>
                      <a href="service-single.html">Culture and Recreation</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col col-lg-4 col-md-6 col-12 col-md-6 col-sm-12 col-12">
                <div class="widget newsletter-widget">
                  <div class="widget-title">
                    <h3>Contact Us</h3>
                  </div>
                  <p>Nulla nequeut molestie interdum nisl ut consequat.</p>
                  <ul class="info">
                    <li>
                      <i class="flaticon-email"></i> charius@gmail.com
                    </li>
                    <li>
                      <i class="flaticon-telephone"></i> + 8 (123) 123 - 456 -
                      789
                    </li>
                    <li>
                      <i class="flaticon-location"></i> 19 Thordge Shiloh,Hawai
                      863
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="wpo-lower-footer">
          <div class="container">
            <div class="row align-items-center">
              <div class="col col-lg-6 col-md-12 col-12">
                <ul>
                  <li>
                    © 2024 <a href="#">Yesh Tikvah</a>. All rights reserved.
                  </li>
                </ul>
              </div>
              <div class="col col-lg-6 col-md-12 col-12">
                <div class="link">
                  <ul>
                    <li>
                      <a href="#">Privace &amp; Policy</a>
                    </li>
                    <li>
                      <a href="#">Terms</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
