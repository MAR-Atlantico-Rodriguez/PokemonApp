import './App.css';
import { Login } from './Pages/Login/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NoMatch from './Pages/NoMatch/NoMatch';
import { Landing } from './Pages/Landing/Landing';
import { ListPokemon } from './Pages/ListPokemon/ListPokemon';
import { useState } from 'react';
import { DashboardProvider } from './Contexts/DashboardContext';
import { Dashboard } from './Pages/Dashboard/Dashboard';

function App() {
  const [isLogged, setIsLogged] = useState(
    window.localStorage.getItem("isLogged") === "true"
  );

  function onSuccess() {
    setIsLogged(true);
  }

  function onLogout() {
    setIsLogged(false);
    window.localStorage.removeItem("isLogged");
  }
  return (
    <div className="App">
      <BrowserRouter>
        <DashboardProvider value={{onLogout,onSuccess,isLogged}}>        
          <Routes>          
              <Route path="/" element={isLogged ? <Dashboard /> : <Landing />} />
              {/* <Route path="/login" element={<Login />} />   */}
              {isLogged ? null : (
                <Route path="/login" element={<Login />} />
              )}            
              <Route path="*" element={<NoMatch />} />
          </Routes>
        </DashboardProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
