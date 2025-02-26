import Home from "./pages/home";
import About from "./pages/about";
import Services from "./pages/services";
import Contact from "./pages/contact";
import Inscription from "./pages/inscription";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Connexion from "./pages/connexion";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/connexion" element={<Connexion/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;