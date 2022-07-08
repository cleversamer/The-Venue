import Header from "../components/Header";

const Home = () => {
  return (
    <div className="app">
      <Header />

      <div style={{ backgroundColor: "red", height: "800px" }}></div>
      <div style={{ backgroundColor: "green", height: "800px" }}></div>
      <div style={{ backgroundColor: "blue", height: "800px" }}></div>
      <div style={{ backgroundColor: "yellow", height: "800px" }}></div>
      <div style={{ backgroundColor: "purple", height: "800px" }}></div>
    </div>
  );
};

export default Home;
