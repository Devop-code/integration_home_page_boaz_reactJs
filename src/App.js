import Home from "./pages/home";
import About from "./pages/about";
import Services from "./pages/services";
import Contact from "./pages/contact";
import Inscription from "./pages/inscription";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Connexion from "./pages/connexion";
import HomePage from "./pages/HomePages";
import { useEffect } from "react";
import AviServicePage from "./pages/services/serviceAVI";
import ServiceAdminPage from "./pages/services/serviceAideadmin";
import ServiceAidelog from "./pages/services/serviceAidelog";
import ServiceOrien from "./pages/services/serviceOrien";
import ServiceFinFrance from "./pages/services/servicefinfran";
import ServiceFinance from "./pages/services/servicefinance"
import { Blog } from "./pages/blog";
import Test from "./pages/Test";
import PricingSection from "./pages/PriceTest";
function App() {
  // useEffect(()=>{
  //   const script = document.createElement('script')
  //   script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
  //   document.body.appendChild(script)

  //   window.googleTranslateElementInit = function() {
      
  //       // eslint-disable-next-line no-undef
  //       new google.translate.TranslateElement(
  //         {pageLanguage: 'en',
  //           includedLanguages: 'en,fr,es',
  //           layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
  //           },
  //          'google_translate_element');
      
  //   }
  // })
  return (
    
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />}/>
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/connexion" element={<Connexion/>} />
        <Route path="services/avi" element={<AviServicePage />} />
        <Route path="services/aide-administrative" element={<ServiceAdminPage />} />
        <Route path="services/aide-logement" element={<ServiceAidelog />} />
        <Route path="services/orientation" element={<ServiceOrien />} />
        <Route path="services/financement-france" element={<ServiceFinFrance />} />
        <Route path="services/financement" element={<ServiceFinance />} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="*" element={<HomePage />} />
        <Route path="/test" element={<Test/>} />
        <Route path="/price" element={<PricingSection/>} />
      </Routes>
    </BrowserRouter>
 
  );
}

export default App;