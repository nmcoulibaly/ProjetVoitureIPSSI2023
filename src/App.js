import './App.css';
import Menu from './core/components/layout/Menu';
import { UserContext } from './core/contexts/AuthContext';
import { useState } from 'react';
import Footer from './core/components/layout/Footer';
import { BrowserRouter } from 'react-router-dom';
import MainRoutes from './components/routes/MainRoutes';

function App() {
  const [user, setUser] = useState(JSON.parse(sessionStorage.getItem('USER')));
  
  return (
    <div className="App">
        <BrowserRouter>
            <Menu></Menu>
            <MainRoutes></MainRoutes>
            <Footer></Footer>
        </BrowserRouter>
    </div>
  );
}

export default App;
