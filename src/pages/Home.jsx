import Header from "../components/Header";
import Footer from "../components/Footer";
import Featured from "../components/featured";
import VenueNFO from "../components/venueNfo";
import Highlights from "../components/highlights";

const Home = () => {
  return (
    <div className="app">
      <Header />

      <Featured />

      <VenueNFO />

      <Highlights />

      <Footer />
    </div>
  );
};

export default Home;
