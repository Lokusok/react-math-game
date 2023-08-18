import Header from './components/Header/Header';
import OptsModalContainer from './components/OptsModal/OptsModalContainer';
import GameAreaContainer from './components/GameArea/GameAreaContainer'

import './App.css';
import {useEffect} from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';


function App() {
  const navigate = useNavigate();

  useEffect(() => {
    if (window.location.pathname === '/') {
      navigate('/sum');
    }
  });

  return (
    <>
      <Header/>
      <OptsModalContainer/>

      <Routes>
        <Route
          path="/"
          element={<GameAreaContainer operator="+"/>}
        />
        <Route
          path="/sum"
          element={<GameAreaContainer operator="+"/>}
        />
        <Route
          path="/substraction"
          element={<GameAreaContainer operator="-"/>}
        />
        <Route
          path="/multiply"
          element={<GameAreaContainer operator="*"/>}
        />
        <Route
          path="/division"
          element={<GameAreaContainer operator="/"/>}
        />
      </Routes>
    </>
  );
}

export default App;
