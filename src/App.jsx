import { Routes, Route } from "react-router";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './components/About';
import Footer from './components/Footer';
import NotFound from './pages/NotFound'; 

// https://andreirybin.com/


function App() {

  return (
    <div className="max-w-screen-2xl mx-auto p-4">
      <Navbar/>
      
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NotFound />} /> 
      </Routes>

      <Footer/>
    </div>
  )
}

export default App;