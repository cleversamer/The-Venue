import { Element } from "react-scroll";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Featured from "../components/featured";
import VenueNFO from "../components/VenueNFO";
import Highlights from "../components/highlights";
import Pricing from "../components/Pricing";
import Location from "../components/Location";

const Home = () => {
  return (
    <div className="app">
      <Header />

      <Element name="featured">
        <Featured />
      </Element>

      <Element name="venuenfo">
        <VenueNFO />
      </Element>

      <Element name="highlights">
        <Highlights />
      </Element>

      <Element name="pricing">
        <Pricing />
      </Element>

      <Element name="location">
        <Location />
      </Element>

      <Footer />
    </div>
  );
};

export default Home;
