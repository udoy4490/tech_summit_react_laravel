import React from "react";
import Footer from "../components/Footer";
import GreenButton from "../components/GreenButton";
import Navbar from "../components/Navbar";
import "./about.css";
function About() {
  return (
    <>
      <Navbar />
      <main>
        <section className="container">
          <h2 className="home_title">About Us</h2>
          <p className="aboutus_desc">
            Tech Summit is a technology company specializing in providing
            programming courses to help individuals develop their tech skills.
            With a focus on delivering high-quality, engaging content, we aim to
            make technology accessible to everyone. Join us on our mission to
            bridge the tech skills gap.
          </p>
          <div className="aboutus_button">
            <GreenButton link="/courses" text="Contact Us" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default About;
