import { useState } from "react";
import styles from "./App.module.css";

// section
import Navbar from './sections/Navbar/index.jsx';
import Hero from './sections/Hero/index.jsx';
import Pricing from './sections/Pricing/index.jsx';
import About from './sections/About/index.jsx';
import Contact from './sections/Contact/index.jsx';
import SvgShape from './sections/SvgShape/index.jsx';

// component
import ModalLogin from './components/ModalLogin/index.jsx';

function App() {
  const [modalLoginOpen, setModalLoginOpen] = useState(false);

  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <Navbar onLoginClick={() => setModalLoginOpen(true)} />
        <Hero />
        <About />
        <Pricing />
        <Contact />
      </div>
      <SvgShape />

      <ModalLogin show={modalLoginOpen} onClose={() => setModalLoginOpen(false)} />
    </div>
  )
}

export default App
