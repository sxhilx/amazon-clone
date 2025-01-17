import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import { Outlet } from "react-router-dom";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isSidebarOpen]);

  return (
    <>
      <div className="flex flex-col min-h-screen relative">
        <Navbar toggleSidebar={toggleSidebar} />

        <div className="flex-grow relative">
          <Outlet />
        </div>

        <Footer />

        <div
          className={`absolute top-0 left-0 h-screen w-[20%] bg-white transition-transform duration-300 z-50 overflow-y-auto ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <SideBar toggleSidebar={toggleSidebar} />
        </div>

        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={toggleSidebar} 
          ></div>
        )}

      </div>
    </>
  );
}

export default App;
