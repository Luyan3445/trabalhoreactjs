import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Cabecalho from './components/Header';
import Rodape from './components/Footer';
import Home from './pages/Home';
import Pets from './pages/Pets';
import PetDetails from './pages/PetDetails';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import RegisterPerson from './pages/RegisterPerson';
import RegisterOng from './pages/RegisterOng';
import AddPet from './pages/AddPet';

const App: React.FC = () => {
  return (
    <div className="app">
      <Cabecalho />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pets" element={<Pets />} />
          <Route path="/pets/:id" element={<PetDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register-person" element={<RegisterPerson />} />
          <Route path="/register-ong" element={<RegisterOng />} />
          <Route path="/add-pet" element={<AddPet />} />
        </Routes>
      </main>
      <Rodape />
    </div>
  );
};

export default App;
