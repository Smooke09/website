import "./App.css";
import About from "./components/About";
import Hero from "./components/Hero";
import Exp from "./components/Experience";
import Quality from "./components/Quality";
import Contact from "./components/Contact";

export default (props) => (
  <div>
    <Hero />
    <About />
    <Exp />
    <Quality />
    <Contact />
  </div>
);
