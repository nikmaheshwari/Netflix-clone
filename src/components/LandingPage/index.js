import React from "react";
import { Slider } from "./presentations";
import HomeList from "./HomeList";
import { Nav, Footer } from "@/components/global";

const LandingPage = () => (
  <div className="homepage-container">
    <Nav />
    <Slider />
    <HomeList />
    <Footer />
  </div>
);

export default LandingPage;
