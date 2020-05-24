import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Maps from "../theme/Maps";
import Footer from "../components/Footer";
import Selection from "../components/Selection";

const Landing = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Selection />
      <Maps />
      <Footer />
    </div>
  );
};

export default Landing;
