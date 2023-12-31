import React from "react";
import "../../styles/exercise.css";
import lungs from "../../assets/img/lunges.png";
import yoga from "../../assets/img/yoga-pose.png";
import extended from "../../assets/img/extended.png";

const Exercise = () => {
  return (
    <section id="schedule">
      <div className="container exercise__container">
        <div className="exercise__top">
          <h2 className="section__title">
            Benefits of <span className="Highlight">Exercise</span>
          </h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            <br /> Laboriosam libero adipisci deleniti hic ipsam tempora
            sapiente!
          </p>
        </div>

        {/** exercise list  */}

        <div className="exercise__wrapper">
          <div className="exercise__item" data-aos='zoom-in' data-aos-duration = "1800">
            <span className="exercise__icon">
              <img src={lungs} alt="" />
            </span>
            <div className="exercise__content">
              <h4>Healthy Life</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br /> Libero
                odio 
              </p>
            </div>
          </div>

          <div className="exercise__item" data-aos='zoom-in' data-aos-duration = "1800">
            <span className="exercise__icon">
              <img src={yoga} alt="" />
            </span>
            <div className="exercise__content">
              <h4> Increased Flexibility </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br /> Libero
                odio 
              </p>
            </div>
          </div>

          <div className="exercise__item" data-aos='zoom-in' data-aos-duration = "1800">
            <span className="exercise__icon">
              <img src={extended} alt="" />
            </span>
            <div className="exercise__content">
              <h4>Reducing Blood Pressure</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br /> Libero
                odio 
              </p>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
};

export default Exercise;
