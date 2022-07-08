import Header from "../components/Header";
import Footer from "../components/Footer";
import Featured from "../components/featured";

const Home = () => {
  return (
    <div className="app">
      <Header />

      <>
        <Featured />
      </>

      <div style={{ backgroundColor: "red", height: "800px" }}></div>
      <div style={{ backgroundColor: "green", height: "800px" }}></div>
      <div style={{ backgroundColor: "blue", height: "800px" }}></div>
      <div style={{ backgroundColor: "yellow", height: "800px" }}></div>
      <div style={{ backgroundColor: "purple", height: "800px" }}></div>

      <Footer />
    </div>
  );
};

export default Home;
