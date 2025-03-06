import React, { useState, useEffect } from "react";
import CardSkill from "../../components/reusable/CardSkill";
import LineHead from "../../components/reusable/LineHead";
import Slider from "react-slick";
import { design, frontend, backend, outils } from "../../data/technologiesData";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function Skills() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 780);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const renderSkills = () => {
    if (isMobile) {
      return (
        <div className="flex flex-col gap-8">
          <CardSkill title="Backend" items={backend} />
          <CardSkill title="Frontend" items={frontend} />
          <CardSkill title="Design" items={design} />
          <CardSkill title="Outils" items={outils} />
        </div>
      );
    } else {
      
      const sliderSettings = {
        className: "center",
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        centerMode: true,
        infinite: true,
        centerPadding: "5px",
        slidesToShow: 3,
        speed: 500,
        responsive: [
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 2,
            },
          },
        ],
        
      };

      return (
        <div className="skills-slider mt-20">
          <Slider {...sliderSettings}>
            <div key="backend-slide">
              <CardSkill
                title="Backend"
                items={backend}
                keyprop="backend-slide"
              />
            </div>
            <div key="frontend-slide">
              <CardSkill
                title="Frontend"
                items={frontend}
                keyprop="frontend-slide"
              />
            </div>
            <div key="design-slide ">
              <CardSkill title="Design" items={design} keyprop="design-slide" />
            </div>
            <div key="outils-slide">
              <CardSkill title="Outils" items={outils} keyprop="outils-slide" />
            </div>
          </Slider>
        </div>
      );
    }
  };

  return (
    <section>
      <LineHead title="__.Skills" />
      {renderSkills()}
    </section>
  );
}
