import Header from "../components/Header";
import Footer from "../components/Footer";
import Featured from "../components/featured";
import VenueNFO from "../components/VenueNFO";
import Highlights from "../components/highlights";
import Princing from "../components/Pricing";
import Location from "../components/Location";

const Home = () => {
  return (
    <div className="app">
      <Header />

      <Featured />

      <VenueNFO />

      <Highlights />

      <Princing />

      <Location />

      <Footer />
    </div>
  );
};

export default Home;
