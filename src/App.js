import Feature from "./components/Feature";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Offer from "./components/Offer";
import About from "./components/About";
import Review from "./components/Review";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Feature />
      <Offer />
      <About />
      <Review />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
