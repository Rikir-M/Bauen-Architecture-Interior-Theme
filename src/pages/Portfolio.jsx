// import React from 'react'
import "./Portfolio.css";
import img1 from "../assets/images/bg--1.jpg";
import img2 from "../assets/images/bg--2.jpg";
import img3 from "../assets/images/stonyaVilla.jpg";
import img4 from "../assets/images/primeHotel.jpg";
import img5 from "../assets/images/lakeHouse.jpg";
import img6 from "../assets/images/urbanHouse.jpg";
import { useState } from "react";

const Portfolio = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);

  const handleClick = () => {
    setShowAllProjects(true);
  };
  return (
    <div>
      <div className="flex justify-center font-Oswald uppercase project-title mt-40">
        <p className=" text-white me-6">Our</p>
        <p className=" text-secondary">Projects</p>
      </div>
      <div className=" mx-auto container-after">
        <div className="grid grid-cols-12">
          <div className="projects col-span-6">
            <div className="project-container">
              <a href="#">
                <img src={img1} alt="" className="project-img" />
              </a>
              <div className="font-light project-text font-Oswald bg-primary">
                <p className=" text-base upper-text uppercase leading-5  text-secondary">
                  interior
                </p>
                <p className="link-to-project leading-5 text-white uppercase">
                  <a href="#">cotton house</a>
                </p>
              </div>
            </div>
          </div>
          <div className="projects col-span-6">
            <div className="project-container" style={{ marginTop: "78px" }}>
              <a href="#">
                <img src={img2} alt="" className="project-img" />
              </a>
              <div className="font-light project-text font-Oswald bg-primary">
                <p className=" text-base upper-text uppercase leading-5 text-secondary">
                  exterior
                </p>
                <p className="link-to-project leading-5 text-white uppercase">
                  <a href="#">armada center</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12">
          <div className="projects col-span-6">
            <div className="project-container">
              <a href="#">
                <img src={img3} alt="" className="project-img" />
              </a>
              <div className="font-light project-text font-Oswald bg-primary">
                <p className=" text-base upper-text uppercase leading-5  text-secondary">
                  urban
                </p>
                <p className="link-to-project leading-5 text-white uppercase">
                  <a href="#">stonya villa</a>
                </p>
              </div>
            </div>
          </div>
          <div className="projects col-span-6">
            <div className="project-container" style={{ marginTop: "78px" }}>
              <a href="#">
                <img src={img4} alt="" className="project-img" />
              </a>
              <div className="font-light project-text font-Oswald bg-primary">
                <p className=" text-base upper-text uppercase leading-5 text-secondary">
                  interior
                </p>
                <p className="link-to-project leading-5 text-white uppercase">
                  <a href="#">prime hotel</a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {showAllProjects && (
          <div className="grid grid-cols-12">
            <div className="projects col-span-6">
              <div className="project-container">
                <a href="#">
                  <img src={img5} alt="" className="project-img" />
                </a>
                <div className="font-light project-text font-Oswald bg-primary">
                  <p className=" text-base upper-text uppercase leading-5  text-secondary">
                    interior
                  </p>
                  <p className="link-to-project leading-5 text-white uppercase">
                    <a href="#">lake house</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="projects col-span-6 animate__animated animate__fadeInTopLeft">
              <div className="project-container" style={{ marginTop: "78px" }}>
                <a href="#">
                  <img src={img6} alt="" className="project-img" />
                </a>
                <div className="font-light project-text font-Oswald bg-primary">
                  <p className=" text-base upper-text uppercase leading-5 text-secondary">
                    urban
                  </p>
                  <p className="link-to-project leading-5 text-white uppercase">
                    <a href="#">urban house</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
        {!showAllProjects && (
          <div className="flex justify-center mt-6">
            <button
              className="load-more-button uppercase font-Oswald font-light"
              onClick={handleClick}
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
