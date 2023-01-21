import React, {useEffect, useRef} from "react";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import hero_image from "../images/hero_image.png";
import "./home.css";
function Home() {
  const animateRef = useRef([]);
  animateRef.current = [];

  const addToRef = (el) => {
    if(el && !animateRef.current.includes(el)){
      animateRef.current.push(el);
    }
  }
  useEffect(()=>{
    const observer = new IntersectionObserver((entries)=>{
      entries.forEach((entry)=>{
        if(entry.isIntersecting){
          entry.target.classList.add('show')
        }else{
          entry.target.classList.remove("show");

        }
      })
    });

    animateRef.current.forEach((el)=> observer.observe(el));
  },[])
  return (
    <>
      <Navbar />
      <main className="container">
        <section className="hero_section">
          <div className="hero_text">
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
            <Card  />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </section>
        <section>
          <h2 className="home_title">
            Our Top Services
            <div className="services">
              <div ref={addToRef} className="box1 hidden">hello</div>
              <div ref={addToRef} className="box2 hidden">hello</div>
              <div ref={addToRef} className="box3 hidden">hello</div>
              <div ref={addToRef} className="box4 hidden">hello</div>
            </div>
          </h2>
        </section>
      </main>
    </>
  );
}

export default Home;
