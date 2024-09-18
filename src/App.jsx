import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './assets/components/Navbar'; 
import Home from './assets/paginas/Home';
import Galeria from './assets/paginas/Galeria';
import EducaMais from './assets/paginas/EducaMais';
import NotFound from './assets/paginas/NotFound';
import GlobalStyle from './assets/components/EstilosGlobais'
import Rodape from './assets/components/Rodape';
import GamePage from './assets/paginas/GamePage';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/educa-mais" element={<EducaMais />} />
        <Route path="/galeria/:id" element={<GamePage />} />
        <Route path="*" element={<NotFound />} /> 
      </Routes>
      <Rodape />
    </Router>
  );
}

export default App;
