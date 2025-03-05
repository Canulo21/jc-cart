import { Route, Routes } from "react-router-dom";
import BannerSection from "./Components/Banner/BannerSection";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home";
import Products from "./Pages/Products";

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <div id="site-slider">
        <BannerSection />
      </div>
      <div className="site-holder px-[10px] sm:px-[10px] md:px-[30px] 2xl:px-[100px]">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="products" element={<Products />}></Route>
        </Routes>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
