import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Maps from "../theme/Maps";
import Selection from "../components/Selection";
import Footer from "../components/Footer";

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
