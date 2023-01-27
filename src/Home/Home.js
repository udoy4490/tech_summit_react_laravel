import React, { useEffect } from "react";
import Card from "../components/Card";
import GreenButton from "../components/GreenButton";
import ListCard from "../components/ListCard";
import Navbar from "../components/Navbar";
import hero_image from "../images/hero_image.png";
import seminar_image from "../images/seminar_default.jpg";
import { useStateValue } from "../StateProvider";
import "./home.css";

function Home() {
  const { addToRef, animateCurrentElements } = useStateValue();

  useEffect(() => {
    animateCurrentElements();
  }, []);
  return (
    <>
      <Navbar />
      <main className="container">
        <section className="hero_section">
          <div className="hero_text hidden" ref={addToRef}>
            <h1 className="hero_title">
              Learn the Latest
              <span className="text_yellow_gradient"> Tech Skills</span> with
              Our
              <span className="text_pink"> Courses</span>
            </h1>
            <h2 className="hero_description">
              Learn the latest tech skills with our expert-led courses.
            </h2>
          </div>
          <div className="hero_image">
            <img src={hero_image} alt="Hero Image" />
          </div>
        </section>
        <section>
          <h2 className="home_title">
            🔥 <span className="text_yellow_gradient">Top Courses</span> 🔥
          </h2>
          <div className="courses">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </section>
        <section className="mt-5">
          <h2 className="home_title">Our Top Services</h2>
          <div className="services">
            <div ref={addToRef} className="box1 hidden">
              Sill Development
            </div>
            <div ref={addToRef} className="box2 hidden">
              Web Development
            </div>
            <div ref={addToRef} className="box3 hidden">
              UI/UX
            </div>
            <div ref={addToRef} className="box4 hidden">
              Software
            </div>
          </div>
        </section>
        <section className="mt-5 ">
          <h2 className="home_title">
            🚀 <span className="text_yellow_gradient">Free Seminar</span> 🚀
          </h2>
          <div className="seminar_card">
            <div className="seminar_info">
              <h1 className="home_title">অংশ নিন ফ্রি সেমিনারে</h1>
              <div className="seminar_list_cards hidden" ref={addToRef}>
                <ListCard />
                <ListCard />
              </div>
              <div className="seminar_button hidden" ref={addToRef}>
                <GreenButton link="#" text="Join Seminar" />
              </div>
            </div>
            <div className="seminar_image">
              <img src={seminar_image} alt="seminar image" srcset="" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
