import React from 'react';
import AppRouter from './utils/AppRouter';
import { GameProvider } from './utils/GameContext';

function App() {
  return (
    <div>
      <GameProvider>
        <AppRouter />
      </GameProvider>
    </div>
  );
}

export default App;