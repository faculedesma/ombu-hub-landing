import React from "react";
import Hero from "@components/hero/Hero";
import HomeCourses from "@components/courses/HomeCourses";
import SeparatorOne from "@components/separators/SeparatorOne";
import SeparatorTwo from "@components/separators/SeparatorTwo";
import SeparatorThree from "@components/separators/SeparatorThree";
import WhoAreWe from "@components/who-are-we/WhoAreWe";
import StudentsReview from "@components/reviews/StudentsReview";
import Footer from "@components/footer/Footer";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <SeparatorOne />
      <HomeCourses />
      <SeparatorTwo />
      <WhoAreWe />
      <StudentsReview />
      <SeparatorThree />
      <Footer />
    </div>
  );
};

export default Home;
