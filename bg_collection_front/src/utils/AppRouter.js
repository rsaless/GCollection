import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GamesPage from '../pages/games/GamesPage';
import SleevesPage from '../pages/SleevesPage';
import LoginPage from '../pages/LoginPage';
import AddGamePage from '../pages/games/AddGamePage';
import EditGamePage from '../pages/games/EditGamePage';
import GameDetailsPage from '../pages/games/GameDetailsPage';  
import Header from '../components/Header';

const AppRouter = () => {
    return (
      <Router>
        <Header />
        <Routes>
          <Route path="/games" element={<GamesPage />}/>
          <Route path="/games:id" element={<GameDetailsPage />} />
          <Route path="/games:id/edit" element={<EditGamePage />} />
          <Route path="/games/add" element={<AddGamePage />} /> 
          <Route path="/sleeves" element={<SleevesPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Router>
    );
  };
  
  export default AppRouter;