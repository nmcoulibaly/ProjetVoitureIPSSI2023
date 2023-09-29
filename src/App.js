import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Menu from './core/components/layout/Menu';
import MainRoutes from './core/routes/MainRoutes';
import { UserContext } from './core/contexts/AuthContext';
import { useState } from 'react';
import Footer from './core/components/layout/Footer';

function App() {
  const [user, setUser] = useState(JSON.parse(sessionStorage.getItem('USER')));
  
  return (
    <div>

      <UserContext.Provider value={[user, setUser]}>
        <BrowserRouter>
            <Menu></Menu>
            <Footer></Footer>
            <MainRoutes />
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}

export default App;
