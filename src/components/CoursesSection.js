import React from "react";
import Card from "./Card";
import "./coursesSection.css";

function CoursesSection() {
  return (
    <>
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
    </>
  );
}

export default CoursesSection;
