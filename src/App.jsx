import { useState, useEffect } from 'react';
import "./App.css";
import Header from "./Components/Header.jsx";
import Home from "./Components/Home.jsx";
import About from "./Components/About.jsx";
import Skills from "./Components/Skills.jsx";
import Projects from "./Components/Project.jsx";
import Testimon from "./Components/Testimon.jsx";
import Contact from "./Components/Contact.jsx";
import Loading from "./Components/Loading.jsx";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 10200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <Loading />}
      <div className={`app ${loading ? 'hidden' : 'fade-in'}`}>
        <Header />
        <main>
          <section id="home" className="section"><Home /></section>
          <section id="about" className="section"><About /></section>
          <section id="skills" className="section"><Skills /></section>
          <section id="projects" className="section"><Projects /></section>
          <section id="testimonials" className="section"><Testimon /></section>
          <section id="contact" className="section"><Contact /></section>
        </main>
      </div>
    </>
  );
}
// Purpose: module documentation
// Note: reviewed for clarity
// Format: normalized spacing
// Structure: annotated
