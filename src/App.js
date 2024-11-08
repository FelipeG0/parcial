import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import UserProfile from './Components/UserProfile';
import SportCard from './Components/SportCard';
import { getUserData } from './Service/UserService';
import BotonLang from './Components/BotonLang';

function App() {
  const userData = getUserData();

  return (
    <BrowserRouter>
      <div className="app-container">
        <Routes>
          <Route path="/login" element={<Login />} />


          <Route 
            path="/home" 
            element={
              <div className="app">
                <header className="user-info">
                  <UserProfile user={userData} />
                </header>
                <main className="content">
                  <SportCard sportsData={userData.sportsData} />
                </main>
              </div>
            } 
          />

          <Route path="*" element={<Login />} />
        </Routes>
        <footer className="footer">
            <BotonLang />
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
