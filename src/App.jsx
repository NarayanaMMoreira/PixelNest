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
import ArtigoPage from './assets/paginas/ArtigoPage';
import LoginPage from './assets/paginas/LoginPage';
import UserProfile from './assets/paginas/UserPage';
import RegisterPage from './assets/paginas/RegisterPage';
import TwoFA from './assets/paginas/2FA';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/educa-mais" element={<EducaMais />} />
        <Route path="/educa-mais/:id" element={<ArtigoPage />} />
        <Route path="/galeria/:id" element={<GamePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/user/profile" element={<UserProfile />} />
        <Route path="/2fa" element={<TwoFA />} />
        <Route path="/cadastrar" element={<RegisterPage />} />
        <Route path="*" element={<NotFound />} /> 
      </Routes>
      <Rodape />
    </Router>
  );
}

export default App;
