import React from "react";
import "./homePage.scss";
import Title from "./HomePage/Title";
import JokeContent from "./HomePage/JokeContent";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

function HomePage() {
  return (
    <>
      <Header />
      <Title />
      <JokeContent />
      <Footer />
    </>
  );
}

export default HomePage;
