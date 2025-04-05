import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './Pages/Inicio';
import SobreMi from './Pages/SobreMi';
import Consultoria from './Pages/Consultoria';
import Contacto from './Pages/Contacto';
import { enlacesDeNavegacion } from './Data/EnlacesNavegacion';
import Navbar from './Components/Navbar';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="h-screen">
      <Router>
        <Navbar
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          enlaces={enlacesDeNavegacion}
        />
        <Routes>
          <Route path="/" element={<Inicio menuOpen={menuOpen} />} />
          <Route path="/SobreMi" element={<SobreMi menuOpen={menuOpen} />} />
          <Route
            path="/Consultoria"
            element={<Consultoria menuOpen={menuOpen} />}
          />
          <Route path="/Contacto" element={<Contacto />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
