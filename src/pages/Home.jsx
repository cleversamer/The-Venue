import Header from "../components/Header";
import Footer from "../components/Footer";
import Featured from "../components/featured";
import VenueNFO from "../components/venueNfo";
import Highlights from "../components/highlights";
import Princing from "../components/pricing";

const Home = () => {
  return (
    <div className="app">
      <Header />

      <Featured />

      <VenueNFO />

      <Highlights />

      <Princing />

      <Footer />
    </div>
  );
};

export default Home;
