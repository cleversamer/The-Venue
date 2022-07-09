import Header from "../components/Header";
import Footer from "../components/Footer";
import Featured from "../components/featured";
import VenueNFO from "../components/venueNfo";

const Home = () => {
  return (
    <div className="app">
      <Header />

      <Featured />

      <VenueNFO />

      <Footer />
    </div>
  );
};

export default Home;
