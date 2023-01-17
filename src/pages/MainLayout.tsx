import React from "react";
import Navbar from "../components/Navbar"; 
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import {ScrollToTop} from "../components/ScrollToTop";

const MainLayout = () => {
  return (
    <ScrollToTop>
      <Navbar />
      <Outlet />
      <Footer />
    </ScrollToTop>
  );
};
export default MainLayout;
