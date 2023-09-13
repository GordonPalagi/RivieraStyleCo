import React, { useEffect, useState } from "react";
import "../HeroCard/HeroCard.css";
import "../../mediaQuery.css";
import { useNavigate } from "react-router-dom";

function HeroCard({ title, array, photo, className }) {
  const [mobileScreen, setMobileScreen] = useState(true);

  useEffect(() => {
    const windowWidth = window.innerWidth;
    const handleWindowChange = () => {
      if (windowWidth < 592) {
        setMobileScreen(true);
      } else {
        setMobileScreen(false);
      }
    };

    handleWindowChange();

    window.addEventListener("resize", handleWindowChange);
  }, []);

  const RenderSubHeader = () => {
    return array.map((item, index) => (
      <div className="subheader" key={index}>
        {item.sub}
      </div>
    ));
  };

  const RenderLinks = () => {
    return array.map((item, index) => (
      <li
        onClick={() => navigate("/shopping")}
        key={index}
        className="bannerLinks"
      >
        {item.item1} {item.item2}
      </li>
    ));
  };

  const navigate = useNavigate();
  return mobileScreen ? (
    <div className={className}>
      <div className="inner-hero-con">
        <h1>{title}</h1>
        <RenderSubHeader />
        <RenderLinks />
      </div>
      <img className="groupPhoto" src={photo} alt="" />
    </div>
  ) : (
    <>
      <div className={className}>
        <div className="mobile-h1">
          <h1>{title}</h1>
          <RenderLinks/>
        </div>
        <img className="groupPhoto" src={photo} alt="" />
      </div>
      <div className="mobile-sublinks">
        <RenderSubHeader/>
      </div>
    </>
  );
}

export default HeroCard;
