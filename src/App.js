import Home from "./pages/home";
import About from "./pages/about";
import Services from "./pages/services";
import Contact from "./pages/contact";
import Inscription from "./pages/inscription";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Connexion from "./pages/connexion";

function App() {
  return (
<<<<<<< HEAD
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
=======
    <div className="App">
      
    </div>
>>>>>>> 5ad81656b4d54666b73faaed68031f127f8d320f
  );
}

export default App;