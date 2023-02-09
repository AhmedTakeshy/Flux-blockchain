import React from "react";
import About from "./Components/About/About";
import Banner from "./Components/Banner";
import Developers from "./Components/Developers";
import Footer from "./Components/Footer/Footer";
import Nav from "./Components/Nav";
import Subscribe from "./Components/Subscribe";
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
