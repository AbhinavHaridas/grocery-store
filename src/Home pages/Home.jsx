import React from "react";
import Deals from "./Components/Deals";
import Header from "./Components/Header";
import SearchNavbar from "./Components/SearchNavbar";
import Bestsellers from "./Components/Bestsellers";
import Footer from "../Landing pages/Components/Footer";
import AllDeals from "./Components/AllDeals";
import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();
  const customerId = location?.state?.user_id;
  return (
    <>
      <SearchNavbar customerId={customerId} />
      <Header />
      <AllDeals customerId={customerId} />
      <Footer />
    </>
  );
};

export default Home;
