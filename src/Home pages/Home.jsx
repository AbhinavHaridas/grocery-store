import React from "react";
import Deals from "./Components/Deals";
import Header from "./Components/Header";
import SearchNavbar from "./Components/SearchNavbar";
import Bestsellers from "./Components/Bestsellers";
import EndOfSeason from "./Components/EndOfSeason";
import Footer from "../Landing pages/Components/Footer";

const Home = () => {
  return (
    <>
      <SearchNavbar />
      <Header />
      <Deals />
      <Bestsellers />
      <EndOfSeason />
      <Footer />
    </>
  );
};

export default Home;
