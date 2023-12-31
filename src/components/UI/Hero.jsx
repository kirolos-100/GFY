import React from "react";
import heroImg from "../../assets/img/gym-02.png";
import dumbleIcon from "../../assets/img/dumble.png";
import "../../styles/hero.css";

const Hero = () => {
    return (
        <section id="home">
            <div className="container">
                <div className="hero__wrapper">
                    {/* hero content  */}
                    <div className="hero__content">
                        <h2 className="section__title" data-aos='fade-up' data-aos-duration = "1800">
                            Exercise is the key to a
                            <span className="Highlight"> Healthy</span> lifestyle
                        </h2>
                        <p  data-aos='fade-up' data-aos-duration = "1500" data-aos-delay='200' >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br></br>
                            Vitae delectus at porro quaerat! Quam vitae accusamus nobis nam
                            accusantium
                        </p>
                        <div className="hero__btns" data-aos='fade-up' data-aos-duration = "1500" data-aos-delay='200'>
                            <button className="register__btn">Get Started</button>
                            <button className="watch__btn">
                                <span>
                                    <i class="ri-play-line"></i>
                                </span>
                                Watch Video
                            </button>
                        </div>
                    </div>
                    {/* hero img  */}
                    <div className="hero__img">
                        <div className="hero__img-wrapper">
                            <div className="box-01">
                                <div className="box-02">
                                    <div className="box-03">
                                        <div className="box__img">
                                            <img src={heroImg} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="heart__rate" data-aos='fade-right' data-aos-duration = "1800" >
                                <h5>Heart Rate</h5>
                                <span>
                                    <i class="ri-heart-3-line"></i>
                                </span>
                                <h6>2567 BPM</h6>
                            </div>

                            <div className="gym__location" data-aos='fade-left' data-aos-duration = "1800">
                                <span>
                                    <i class="ri-map-pin-line"></i>
                                </span>
                                <h5>
                                    Find a new gym<br></br> near you{" "}
                                </h5>
                            </div>

                            <div className="dumble__icon" data-aos='fade-down' data-aos-duration = "1800">
                                <img src={dumbleIcon} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
