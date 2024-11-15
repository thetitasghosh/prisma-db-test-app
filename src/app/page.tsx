import React from "react";
import Footer from "@/components/section/Footer";
import AppContent from "@/components/section/AppContent";
const Home = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-between px-11">
      <AppContent />
      <Footer />
    </div>
  );
};

export default Home;
