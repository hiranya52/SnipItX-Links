// import './App.css'

// import Navbar from "./components/NavBar";

// function App() {
//   const handleNavigate = (section) => {
//     console.log("Navigate to:", section);
//   };

//   return (
//     <>
//       <Navbar onNavigate={handleNavigate} />
//     </>
//   );
// }

// export default App;

import { useState } from "react";
import "./App.css";

import Navbar from "./components/NavBar";
import Hero from "./components/Hero";

function App() {
  const [currentSection, setCurrentSection] = useState("home");

  const handleNavigate = (section) => {
    setCurrentSection(section);
  };

  return (
    <>
      <Navbar onNavigate={handleNavigate} />

      {currentSection === "home" && <Hero />}
      {currentSection === "about" && (
        <section className="min-h-screen flex items-center justify-center text-white">
          <h1 className="text-4xl">About Section</h1>
        </section>
      )}
      {currentSection === "contact" && (
        <section className="min-h-screen flex items-center justify-center text-white">
          <h1 className="text-4xl">Contact Section</h1>
        </section>
      )}
    </>
  );
}

export default App;
