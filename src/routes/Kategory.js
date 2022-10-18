import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import StoreImage from "../components/storeImage/StoreImage";

const kategory = () => {
  return (
    <div>
      <Navbar />

      <StoreImage heading="Kategorier" text="Här kan söka bland kategorier." />

      <Footer />
    </div>
  );
};

export default kategory;
