import React from "react";

import Banner1 from "../../Assets/image/hero-banner-img.png";
import Banner2 from "../../Assets/image/hero-banner-img2.png";
import Banner3 from "../../Assets/image/hero-banner-img3.png";
import Slide1 from "../../Assets/image/fuature-slider-img1.png";
import FutureSlide1 from "../../Assets/image/fuature-img1.png";
import FutureSlide2 from "../../Assets/image/fuature-img2.png";
import FutureSlide3 from "../../Assets/image/fuature-img3.png";
import FutureSlide4 from "../../Assets/image/fuature-img4.png";
import FutureSlide5 from "../../Assets/image/fuature-img5.png";
import FutureSlide6 from "../../Assets/image/fuature-img6.png";
import FutureSlide7 from "../../Assets/image/fuature-img7.png";
import FutureSlide8 from "../../Assets/image/fuature-img8.png";
import FutureSlide9 from "../../Assets/image/fuature-img9.png";
import FutureSlide10 from "../../Assets/image/fuature-img10.png";
import SliderAuthor from "../../Assets/image/slider-author-img.png";
import IphoneBackground from "../../Assets/image/iPhone-12-Pro-Max.png";
import { BackGround, Icon, Logo } from "../../Utilities/Icons";

function Home() {
  return (
    <>
      <div className="hero-band">
        <div className="lg-container">
          <div className="row">
            <div className="col-md-6">
              <div className="hero-band-content">
                <h1>Black Women In Tech</h1>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,{" "}
                </p>
                <a href="#" className="get-start-btn">
                  Get started
                </a>
                <div className="header-scroll-down">
                  <a href="#featured-section">
                    <img src={BackGround.ScrollDown} />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="header-right-img-slider">
                <div data-card="4" className="card">
                  <div className="slider-img-wrapper">
                    <div className="icon">
                      <img height={112} width={112} src={BackGround.Heart} />
                    </div>
                    <div className="slider-img">
                      <img src={Banner1} />
                    </div>
                    <div className="slider-content">
                      <h5>Let’s show the world that we can!1 </h5>
                      <div className="author">
                        <img src={SliderAuthor} />
                        <h6>Maria Greg</h6>
                        <p>CEO of Rolling Corp</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div data-card="3" className="card">
                  <div className="slider-img-wrapper">
                    <div className="icon">
                      <img height={112} width={112} src={BackGround.Heart} />
                    </div>
                    <div className="slider-img">
                      <img src={Banner2} />
                    </div>
                    <div className="slider-content">
                      <h5>Let’s show the world that we can!2 </h5>
                      <div className="author">
                        <img src={SliderAuthor} />
                        <h6>Maria Greg</h6>
                        <p>CEO of Rolling Corp</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div data-card="2" className="card">
                  <div className="slider-img-wrapper">
                    <div className="icon">
                      <img height={112} width={112} src={BackGround.Heart} />
                    </div>
                    <div className="slider-img">
                      <img src={Banner3} />
                    </div>
                    <div className="slider-content">
                      <h5>Let’s show the world that we can!3 </h5>
                      <div className="author">
                        <img src={SliderAuthor} />
                        <h6>Maria Greg</h6>
                        <p>CEO of Rolling Corp</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="services-wrapper" id="featured-section">
        <div className="lg-container">
          <div className="row">
            <div className="col-md-6">
              <h5 className="header-title">FEATURED</h5>
              <h2>
                NFT Marketplace <br />
                Features
              </h2>
            </div>
            <div className="col-md-6">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                quam iaculis arcu lorem. In sapien accumsan, in feugiat vitae
                id. Gravida metus, arcu eleifend sed tempus, risus, nunc, mi.
                Morbi eget morbi sit elementum.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="services-box">
                <a href="#">
                  <div className="services-icon">
                    <img src={BackGround.PictureAsNFT} />
                  </div>
                  <h4>List your Pictures as NFT</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <div className="services-arrow">
                    <img src={Icon.ArrowRightOrange} />
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="services-box">
                <a href="#">
                  <div className="services-icon">
                    <img src={BackGround.CharityFund} />
                  </div>
                  <h4>Pick a Charity You Want to Fund</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <div className="services-arrow">
                    <img src={Icon.ArrowRightOrange} />
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="services-box">
                <a href="#">
                  <div className="services-icon">
                    <img src={BackGround.SolanaLogo} />
                  </div>
                  <h4>Built on Solana Blockchain</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <div className="services-arrow">
                    <img src={Icon.ArrowRightOrange} />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="marketplace-wrapper">
        <div className="container">
          <div className="marketplace-box">
            <div className="row">
              <div className="col-md-6">
                <h2 className="h2">MARKETPLACE</h2>
              </div>
              <div className="col-md-6">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Accumsan integer et nec id diam aliquet cum integer. Viverra
                  lacinia in mattis duis blandit est.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="feature" className="fuature-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="fuature-slider owl-carousel owl-theme">
                <div className="item">
                  <div className="fuature-box">
                    <div className="fuature-img">
                      <img src={Slide1} />
                    </div>
                    <div className="fuature-content">
                      <h5>FEATURE OF THE DAY</h5>
                      <h2 className="h2">Fade Ogunro</h2>
                      <h5>CEO - Bookings Africa</h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Accumsan integer et nec id diam aliquet cum integer.
                        Viverra lacinia in mattis duis blandit est.{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="fuature-box">
                    <div className="fuature-img">
                      <img src={Slide1} />
                    </div>
                    <div className="fuature-content">
                      <h5>FEATURE OF THE DAY</h5>
                      <h2 className="h2">Fade Ogunro</h2>
                      <h5>CEO - Bookings Africa</h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Accumsan integer et nec id diam aliquet cum integer.
                        Viverra lacinia in mattis duis blandit est.{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="fuature-box">
                    <div className="fuature-img">
                      <img src={Slide1} />
                    </div>
                    <div className="fuature-content">
                      <h5>FEATURE OF THE DAY</h5>
                      <h2 className="h2">Fade Ogunro</h2>
                      <h5>CEO - Bookings Africa</h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Accumsan integer et nec id diam aliquet cum integer.
                        Viverra lacinia in mattis duis blandit est.{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="counter">
                <p></p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="first-fuature-list-wrapper">
                <ul>
                  <li>
                    <div className="fuature-list-img">
                      <img src={FutureSlide1} />
                      <h6>Demi</h6>
                    </div>
                    <div className="title">
                      <img src={FutureSlide1} />
                      <h5>How to Triple you Salary</h5>
                    </div>
                  </li>
                  <li>
                    <div className="fuature-list-img">
                      <img src={FutureSlide2} />
                      <h6>Demi</h6>
                    </div>
                    <div className="title">
                      <img src={FutureSlide2} />
                      <h5>Finding your Space in Tech</h5>
                    </div>
                  </li>
                  <li>
                    <div className="fuature-list-img">
                      <img src={FutureSlide3} />
                      <h6>Demi</h6>
                    </div>
                    <div className="title">
                      <img src={FutureSlide3} />
                      <h5>Finding your Space in Tech</h5>
                    </div>
                  </li>
                  <li>
                    <div className="fuature-list-img">
                      <img src={FutureSlide4} />
                      <h6>Demi</h6>
                    </div>
                    <div className="title">
                      <img src={FutureSlide4} />
                      <h5>How to Triple you Salary</h5>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="second-fuature-list-wrapper">
                <ul>
                  <li>
                    <div className="fuature-list-img">
                      <img src={FutureSlide5} />
                      <h6>Demi</h6>
                    </div>
                    <div className="title">
                      <img src={FutureSlide5} />
                      <h5>Finding your Space in Tech</h5>
                    </div>
                  </li>
                  <li>
                    <div className="fuature-list-img">
                      <img src={FutureSlide7} />
                      <h6>Demi</h6>
                    </div>
                    <div className="title">
                      <img src={FutureSlide7} />
                      <h5>How to triple your Salary fast</h5>
                    </div>
                  </li>
                  <li>
                    <div className="fuature-list-img">
                      <img src={FutureSlide6} />
                      <h6>Demi</h6>
                    </div>
                    <div className="title">
                      <img src={FutureSlide6} />
                      <h5>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </h5>
                    </div>
                  </li>

                  <li>
                    <div className="fuature-list-img">
                      <img src={FutureSlide8} />
                      <h6>Demi</h6>
                    </div>
                    <div className="title">
                      <img src={FutureSlide8} />
                      <h5>Lorem ipsum dolor sit amet</h5>
                    </div>
                  </li>
                  <li>
                    <div className="fuature-list-img">
                      <img src={FutureSlide9} />
                      <h6>Demi</h6>
                    </div>
                    <div className="title">
                      <img src={FutureSlide9} />
                      <h5>Finding your Space in Tech</h5>
                    </div>
                  </li>
                  <li>
                    <div className="fuature-list-img">
                      <img src={FutureSlide10} />
                      <h6>Demi</h6>
                    </div>
                    <div className="title">
                      <img src={FutureSlide10} />
                      <h5>How to triple your Salary fast</h5>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="past-featured">
                <a href="#">Past Featured</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="videos" className="your-curiosity-wrapper">
        <div className="your-curiosity-content">
          <div className="container">
            <h2>
              <strong>3800+ talks</strong> to stir your curiosity
            </h2>
            <h6>Find just the right one</h6>
          </div>
        </div>
        <div className="your-curiosity-filter-list">
          <div className="container">
            <form>
              <ul>
                <li>
                  <div className="form-group">
                    <input type="search" placeholder="Search Talks..." />
                  </div>
                </li>
                <li>
                  <div className="form-group">
                    <select>
                      <option>Topics</option>
                      <option>Beginners</option>
                      <option>Business</option>
                      <option>Fashion</option>
                      <option>Gaming</option>
                    </select>
                  </div>
                </li>
                <li>
                  <div className="form-group">
                    <select>
                      <option>Languages</option>
                      <option>English</option>
                      <option>Spanish</option>
                      <option>French</option>
                      <option>Hindi</option>
                    </select>
                  </div>
                </li>
                <li>
                  <div className="form-group">
                    <select>
                      <option>Duration</option>
                      <option>2 Days</option>
                      <option>5 Days</option>
                      <option>7 Days</option>
                      <option>11 Days</option>
                    </select>
                  </div>
                </li>
                <li>
                  <div className="form-group">
                    <select>
                      <option>Type of event</option>
                      <option>Startup Bootcamp 2019</option>
                      <option>Startup Bootcamp 2020</option>
                      <option>Startup Bootcamp 2021</option>
                      <option>Startup Bootcamp 2022</option>`{" "}
                    </select>
                  </div>
                </li>
                <li>
                  <div className="form-group submit">
                    <input type="submit" value="Find a Speaker" />
                  </div>
                </li>
              </ul>
            </form>
          </div>
        </div>

        <div className="your-curiosity-list">
          <div className="container">
            <div className="row">
              <div className="col-md-2">
                <div className="video-box">
                  <div className="img-video-box">
                    <img src="img/video-img-1.png" />
                    <h6 className="time">4:58</h6>
                  </div>
                  <div className="img-video-box-content">
                    <span>Francisca Mutapi</span>
                    <p>
                      <strong>Posted</strong>Dec 2021
                    </p>
                    <h6>
                      Africans should lead on health care solutions for Africa
                    </h6>
                  </div>
                </div>
              </div>
              <div className="col-md-2">
                <div className="video-box">
                  <div className="img-video-box">
                    <img src="img/video-img-2.png" />
                    <h6 className="time">4:58</h6>
                  </div>
                  <div className="img-video-box-content">
                    <span>Kathryn Kolbert</span>
                    <p>
                      <strong>Posted</strong>Dec 2021
                    </p>
                    <h6>The end of Roe v. Wade — and what comes next</h6>
                  </div>
                </div>
              </div>
              <div className="col-md-2">
                <div className="video-box">
                  <div className="img-video-box">
                    <img src="img/video-img-3.png" />
                    <h6 className="time">4:58</h6>
                  </div>
                  <div className="img-video-box-content">
                    <span>Nyra Jordan</span>
                    <p>
                      <strong>Posted</strong>Dec 2021
                    </p>
                    <h6>
                      4 steps to hiring fairly — and supporting criminal justice
                      reform
                    </h6>
                  </div>
                </div>
              </div>
              <div className="col-md-2">
                <div className="video-box">
                  <div className="img-video-box">
                    <img src="img/video-img-4.png" />
                    <h6 className="time">4:58</h6>
                  </div>
                  <div className="img-video-box-content">
                    <span>Matt Walker</span>
                    <p>
                      <strong>Posted</strong>Dec 2021
                    </p>
                    <h6>How sleep affects what (and how much) you eat</h6>
                  </div>
                </div>
              </div>
              <div className="col-md-2">
                <div className="video-box">
                  <div className="img-video-box">
                    <img src="img/video-img-5.png" />
                    <h6 className="time">4:58</h6>
                  </div>
                  <div className="img-video-box-content">
                    <span>Fabio Pacucci</span>
                    <p>
                      <strong>Posted</strong>Dec 2021
                    </p>
                    <h6>
                      Yes, scientists are actually building an elevator to space
                    </h6>
                  </div>
                </div>
              </div>
              <div className="col-md-2">
                <div className="video-box">
                  <div className="img-video-box">
                    <img src="img/video-img-6.png" />
                    <h6 className="time">4:58</h6>
                  </div>
                  <div className="img-video-box-content">
                    <span>Maria Van Kerkhove</span>
                    <p>
                      <strong>Posted</strong>Dec 2021
                    </p>
                    <h6>How to end the pandemic — and prepare for the next</h6>
                  </div>
                </div>
              </div>
              <div className="col-md-2">
                <div className="video-box">
                  <div className="img-video-box">
                    <img src="img/video-img-7.png" />
                    <h6 className="time">4:58</h6>
                  </div>
                  <div className="img-video-box-content">
                    <span>Francisca Mutapi</span>
                    <p>
                      <strong>Posted</strong>Dec 2021
                    </p>
                    <h6>
                      Africans should lead on health care solutions for Africa
                    </h6>
                  </div>
                </div>
              </div>
              <div className="col-md-2">
                <div className="video-box">
                  <div className="img-video-box">
                    <img src="img/video-img-8.png" />
                    <h6 className="time">4:58</h6>
                  </div>
                  <div className="img-video-box-content">
                    <span>Kathryn Kolbert</span>
                    <p>
                      <strong>Posted</strong>Dec 2021
                    </p>
                    <h6>The end of Roe v. Wade — and what comes next</h6>
                  </div>
                </div>
              </div>
              <div className="col-md-2">
                <div className="video-box">
                  <div className="img-video-box">
                    <img src="img/video-img-9.png" />
                    <h6 className="time">4:58</h6>
                  </div>
                  <div className="img-video-box-content">
                    <span>Nyra Jordan</span>
                    <p>
                      <strong>Posted</strong>Dec 2021
                    </p>
                    <h6>
                      4 steps to hiring fairly — and supporting criminal justice
                      reform
                    </h6>
                  </div>
                </div>
              </div>
              <div className="col-md-2">
                <div className="video-box">
                  <div className="img-video-box">
                    <img src="img/video-img-10.png" />
                    <h6 className="time">4:58</h6>
                  </div>
                  <div className="img-video-box-content">
                    <span>Matt Walker</span>
                    <p>
                      <strong>Posted</strong>Dec 2021
                    </p>
                    <h6>How sleep affects what (and how much) you eat</h6>
                  </div>
                </div>
              </div>
              <div className="col-md-2">
                <div className="video-box">
                  <div className="img-video-box">
                    <img src="img/video-img-11.png" />
                    <h6 className="time">4:58</h6>
                  </div>
                  <div className="img-video-box-content">
                    <span>Fabio Pacucci</span>
                    <p>
                      <strong>Posted</strong>Dec 2021
                    </p>
                    <h6>
                      Yes, scientists are actually building an elevator to space
                    </h6>
                  </div>
                </div>
              </div>
              <div className="col-md-2">
                <div className="video-box">
                  <div className="img-video-box">
                    <img src="img/video-img-12.png" />
                    <h6 className="time">4:58</h6>
                  </div>
                  <div className="img-video-box-content">
                    <span>Maria Van Kerkhove</span>
                    <p>
                      <strong>Posted</strong>Dec 2021
                    </p>
                    <h6>How to end the pandemic — and prepare for the next</h6>
                  </div>
                </div>
              </div>

              <div className="col-md-2">
                <div className="video-box">
                  <div className="img-video-box">
                    <img src="img/video-img-13.png" />
                    <h6 className="time">4:58</h6>
                  </div>
                  <div className="img-video-box-content">
                    <span>Francisca Mutapi</span>
                    <p>
                      <strong>Posted</strong>Dec 2021
                    </p>
                    <h6>
                      Africans should lead on health care solutions for Africa
                    </h6>
                  </div>
                </div>
              </div>
              <div className="col-md-2">
                <div className="video-box">
                  <div className="img-video-box">
                    <img src="img/video-img-14.png" />
                    <h6 className="time">4:58</h6>
                  </div>
                  <div className="img-video-box-content">
                    <span>Kathryn Kolbert</span>
                    <p>
                      <strong>Posted</strong>Dec 2021
                    </p>
                    <h6>The end of Roe v. Wade — and what comes next</h6>
                  </div>
                </div>
              </div>
              <div className="col-md-2">
                <div className="video-box">
                  <div className="img-video-box">
                    <img src="img/video-img-15.png" />
                    <h6 className="time">4:58</h6>
                  </div>
                  <div className="img-video-box-content">
                    <span>Nyra Jordan</span>
                    <p>
                      <strong>Posted</strong>Dec 2021
                    </p>
                    <h6>
                      4 steps to hiring fairly — and supporting criminal justice
                      reform
                    </h6>
                  </div>
                </div>
              </div>
              <div className="col-md-2">
                <div className="video-box">
                  <div className="img-video-box">
                    <img src="img/video-img-16.png" />
                    <h6 className="time">4:58</h6>
                  </div>
                  <div className="img-video-box-content">
                    <span>Matt Walker</span>
                    <p>
                      <strong>Posted</strong>Dec 2021
                    </p>
                    <h6>How sleep affects what (and how much) you eat</h6>
                  </div>
                </div>
              </div>
              <div className="col-md-2">
                <div className="video-box">
                  <div className="img-video-box">
                    <img src="img/video-img-17.png" />
                    <h6 className="time">4:58</h6>
                  </div>
                  <div className="img-video-box-content">
                    <span>Fabio Pacucci</span>
                    <p>
                      <strong>Posted</strong>Dec 2021
                    </p>
                    <h6>
                      Yes, scientists are actually building an elevator to space
                    </h6>
                  </div>
                </div>
              </div>
              <div className="col-md-2">
                <div className="video-box">
                  <div className="img-video-box">
                    <img src="img/video-img-18.png" />
                    <h6 className="time">4:58</h6>
                  </div>
                  <div className="img-video-box-content">
                    <span>Maria Van Kerkhove</span>
                    <p>
                      <strong>Posted</strong>Dec 2021
                    </p>
                    <h6>How to end the pandemic — and prepare for the next</h6>
                  </div>
                </div>
              </div>
              <div className="col-md-2">
                <div className="video-box">
                  <div className="img-video-box">
                    <img src="img/video-img-19.png" />
                    <h6 className="time">4:58</h6>
                  </div>
                  <div className="img-video-box-content">
                    <span>Francisca Mutapi</span>
                    <p>
                      <strong>Posted</strong>Dec 2021
                    </p>
                    <h6>
                      Africans should lead on health care solutions for Africa
                    </h6>
                  </div>
                </div>
              </div>
              <div className="col-md-2">
                <div className="video-box">
                  <div className="img-video-box">
                    <img src="img/video-img-20.png" />
                    <h6 className="time">4:58</h6>
                  </div>
                  <div className="img-video-box-content">
                    <span>Kathryn Kolbert</span>
                    <p>
                      <strong>Posted</strong>Dec 2021
                    </p>
                    <h6>The end of Roe v. Wade — and what comes next</h6>
                  </div>
                </div>
              </div>
              <div className="col-md-2">
                <div className="video-box">
                  <div className="img-video-box">
                    <img src="img/video-img-21.png" />
                    <h6 className="time">4:58</h6>
                  </div>
                  <div className="img-video-box-content">
                    <span>Nyra Jordan</span>
                    <p>
                      <strong>Posted</strong>Dec 2021
                    </p>
                    <h6>
                      4 steps to hiring fairly — and supporting criminal justice
                      reform
                    </h6>
                  </div>
                </div>
              </div>
              <div className="col-md-2">
                <div className="video-box">
                  <div className="img-video-box">
                    <img src="img/video-img-22.png" />
                    <h6 className="time">4:58</h6>
                  </div>
                  <div className="img-video-box-content">
                    <span>Matt Walker</span>
                    <p>
                      <strong>Posted</strong>Dec 2021
                    </p>
                    <h6>How sleep affects what (and how much) you eat</h6>
                  </div>
                </div>
              </div>
              <div className="col-md-2">
                <div className="video-box">
                  <div className="img-video-box">
                    <img src="img/video-img-23.png" />
                    <h6 className="time">4:58</h6>
                  </div>
                  <div className="img-video-box-content">
                    <span>Fabio Pacucci</span>
                    <p>
                      <strong>Posted</strong>Dec 2021
                    </p>
                    <h6>
                      Yes, scientists are actually building an elevator to space
                    </h6>
                  </div>
                </div>
              </div>
              <div className="col-md-2">
                <div className="video-box">
                  <div className="img-video-box">
                    <img src="img/video-img-24.png" />
                    <h6 className="time">4:58</h6>
                  </div>
                  <div className="img-video-box-content">
                    <span>Maria Van Kerkhove</span>
                    <p>
                      <strong>Posted</strong>Dec 2021
                    </p>
                    <h6>How to end the pandemic — and prepare for the next</h6>
                  </div>
                </div>
              </div>

              <div className="col-md-2">
                <div className="video-box">
                  <div className="img-video-box">
                    <img src="img/video-img-25.png" />
                    <h6 className="time">4:58</h6>
                  </div>
                  <div className="img-video-box-content">
                    <span>Maria Van Kerkhove</span>
                    <p>
                      <strong>Posted</strong>Dec 2021
                    </p>
                    <h6>How to end the pandemic — and prepare for the next</h6>
                  </div>
                </div>
              </div>
              <div className="col-md-2">
                <div className="video-box">
                  <div className="img-video-box">
                    <img src="img/video-img-26.png" />
                    <h6 className="time">4:58</h6>
                  </div>
                  <div className="img-video-box-content">
                    <span>Francisca Mutapi</span>
                    <p>
                      <strong>Posted</strong>Dec 2021
                    </p>
                    <h6>
                      Africans should lead on health care solutions for Africa
                    </h6>
                  </div>
                </div>
              </div>
              <div className="col-md-2">
                <div className="video-box">
                  <div className="img-video-box">
                    <img src="img/video-img-27.png" />
                    <h6 className="time">4:58</h6>
                  </div>
                  <div className="img-video-box-content">
                    <span>Kathryn Kolbert</span>
                    <p>
                      <strong>Posted</strong>Dec 2021
                    </p>
                    <h6>The end of Roe v. Wade — and what comes next</h6>
                  </div>
                </div>
              </div>
              <div className="col-md-2">
                <div className="video-box">
                  <div className="img-video-box">
                    <img src="img/video-img-28.png" />
                    <h6 className="time">4:58</h6>
                  </div>
                  <div className="img-video-box-content">
                    <span>Nyra Jordan</span>
                    <p>
                      <strong>Posted</strong>Dec 2021
                    </p>
                    <h6>
                      4 steps to hiring fairly — and supporting criminal justice
                      reform
                    </h6>
                  </div>
                </div>
              </div>
              <div className="col-md-2">
                <div className="video-box">
                  <div className="img-video-box">
                    <img src="img/video-img-29.png" />
                    <h6 className="time">4:58</h6>
                  </div>
                  <div className="img-video-box-content">
                    <span>Matt Walker</span>
                    <p>
                      <strong>Posted</strong>Dec 2021
                    </p>
                    <h6>How sleep affects what (and how much) you eat</h6>
                  </div>
                </div>
              </div>
              <div className="col-md-2">
                <div className="video-box">
                  <div className="img-video-box">
                    <img src="img/video-img-30.png" />
                    <h6 className="time">4:58</h6>
                  </div>
                  <div className="img-video-box-content">
                    <span>Fabio Pacucci</span>
                    <p>
                      <strong>Posted</strong>Dec 2021
                    </p>
                    <h6>
                      Yes, scientists are actually building an elevator to space
                    </h6>
                  </div>
                </div>
              </div>

              <div className="col-md-12">
                <div className="pagination">
                  <ul>
                    <li className="disable">
                      <a href="#">Previous</a>
                    </li>
                    <li className="active">
                      <a href="#">1</a>
                    </li>
                    <li>
                      <a href="#">2</a>
                    </li>
                    <li>
                      <a href="#">3</a>
                    </li>
                    <li>
                      <a href="#">4</a>
                    </li>
                    <li>
                      <a href="#">5</a>
                    </li>
                    <li>
                      <a href="#">...</a>
                    </li>
                    <li>
                      <a href="#">50</a>
                    </li>
                    <li>
                      <a href="#">Next</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="try-black-chic-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2>TRY BLACK CHIC TECH ON MOBILE APPS!</h2>
            </div>
            <div className="col-md-12">
              <div className="try-black-img">
                <img src={IphoneBackground} />
              </div>
            </div>
            <div className="col-md-6">
              <ul>
                <li>
                  <a href="#">
                    <img src={Logo.PlayStore} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={Logo.AppStore} />
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet at
                bibendum interdum quam enim diam quisque. Feugiat suspendisse
                rhoncus pellentesque a vitae scelerisque etiam. Lacus et,
                bibendum tincidunt mus.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
