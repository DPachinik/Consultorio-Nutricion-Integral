import { useState } from 'react';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './Pages/Inicio';
import SobreMi from './Pages/SobreMi';
import Consultoria from './Pages/Consultoria';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="h-screen">
      <Router>
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Routes>
          <Route path="/" element={<Inicio menuOpen={menuOpen} />} />
          <Route path="/SobreMi" element={<SobreMi menuOpen={menuOpen} />} />
          <Route
            path="/Consultoria"
            element={<Consultoria menuOpen={menuOpen} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
