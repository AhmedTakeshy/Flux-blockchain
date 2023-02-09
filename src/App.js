import React from "react";
import About from "./components/About/About";
import Banner from "./components/Banner";
import Developers from "./components/Developers";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav";
import Subscribe from "./components/Subscribe";
function App() {
  return (
    <div>
      <Nav />
      <Banner />
      <About />
      <Developers />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
