import React from "react";
import CustomerInfo from "../components/CustomerInfo";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Sections from "../components/Sections";
const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Sections />
      <CustomerInfo />
      <Footer />
    </>
  );
};

export default HomePage;
