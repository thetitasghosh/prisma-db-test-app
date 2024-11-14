import React from "react";
import Footer from "@/components/section/Footer";
import AppContent from "@/components/section/AppContent";
const Home = () => {
  return (
    <div className="w-full px-11 h-screen flex items-center flex-col justify-between">
      <AppContent />
      <Footer />
    </div>
  );
};

export default Home;
