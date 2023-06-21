// import React from 'react'
// import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
// import About from "./pages/About";
import Home from "./pages/Home";
// import Services from "./pages/Services";
// import ServiceDetail from "./pages/ServiceDetail";
import ScrollBtn from "./components/ScrollBtn";
import Portfolio from "./pages/Portfolio";

const App = () => {
  return (
    <div className="selection:bg-selectionColor">
      <Navbar />
      <Home />
      {/* <About /> */}
      <Portfolio/>
      {/* <Services /> */}
      <ScrollBtn />
      {/* <Footer /> */}
    </div>
  );
};

export default App;
