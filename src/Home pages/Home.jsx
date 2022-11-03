import React from "react";
import Deals from "./Components/Deals";
import Header from "./Components/Header";
import SearchNavbar from "./Components/SearchNavbar";
import Bestsellers from "./Components/Bestsellers";
import Footer from "../Landing pages/Components/Footer";
import AllDeals from "./Components/AllDeals";

const Home = () => {
  return (
    <>
      <SearchNavbar />
      <Header />
      {/* <Deals />
      <Bestsellers /> */}
      <AllDeals />
      <Footer />
    </>
  );
};

export default Home;
