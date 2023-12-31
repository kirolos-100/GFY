import React, { useEffect, useRef } from "react";
import "../../styles/header.css";
import logo from "../../assets/img/dumble.png";


const nav__links = [
  {
    path: "#home",
    dispaly: "Home",
  },
  {
    path: "#schedule",
    dispaly: "Schedule",
  },
  {
    path: "#classes",
    dispaly: "Classes",
  },
  {
    path: "#pricing",
    dispaly: "Pricing",
  },
];

const Header = () => {

  const headerRef = useRef(null);

  const headerFunc = ()=> {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      headerRef.current.classlist.add("sticky__header");
    } else {
      headerRef.current.classlist.remove("sticky__header");
    }
  }


  useEffect(()=> {

    window.addEventListener("scroll", headerFunc);

    return ()=> window.removeEventListener("scroll", headerFunc);
  }, []);



  const handleClick = e => {
    e.preventDefault()

    const targetAttr = e.target.getAttribute("href")
    const location = document.querySelector(targetAttr).offsetTop

    window.scrollTo({
      left: 0,
      top: location - 80,
    });
  };





  return (
    <header className="header" ref={headerRef}>
      <div className="container">
        <div className="nav__wrapper">
          {/* ===================== Logo ==================== */}
          <div className="logo">
            <div className="logo__img">
              <img src={logo} alt="" />
            </div>
            <h2>GFY</h2>
          </div>

          {/* navigation bar */}
          <div className="navigation">
            <ul className="menu">
              {nav__links.map((item) => (
                <li className="nav__item">
                  <a onClick={handleClick} href={item.path}>{item.dispaly} </a>
                </li>
              ))}
            </ul>

          </div>
          {/* nav right  */}

          <div className="nav__right">
            <button className="register__btn">Register</button>
            <span className="mobile__menu">
              <i class="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
