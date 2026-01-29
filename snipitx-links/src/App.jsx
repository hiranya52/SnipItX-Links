import "./App.css";
import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import URLShortener from "./components/URLShortner";
import Features from "./components/Features";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <URLShortener />
      <Features />
    </>
  );
}

export default App;
