import React from "react";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import "./home.css";
function Home() {
  return (
    <>
      <Navbar />
      <main className="container">
        <h2>Courses List</h2>
        <section className="courses">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </section>
      </main>
    </>
  );
}

export default Home;
