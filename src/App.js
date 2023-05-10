import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavbarComponent from "./Components/NavbarComponent/NavbarComponent";
import HomeComponent from "./Components/HomeComponent/HomeComponent";
import Footer from "./Components/FooterComponent/Footer";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";


function App() {
  return (
    <BrowserRouter>
        <div>
          <NavbarComponent/>
          <Routes>
            <Route path="/" element={<HomeComponent />} />
            <Route path="About" element={<About />} />
            <Route path="Contact" element={<Contact />} />
          </Routes>
          <Footer/>
        </div>
    </BrowserRouter> 
  );
}

export default App;
