import './App.css';
import Menu from './core/components/layout/Menu';
import MainRoutes from './core/routes/MainRoutes';
import { UserContext } from './core/contexts/AuthContext';
import { useState } from 'react';
import Footer from './core/components/layout/Footer';
import { BrowserRouter } from 'react-router-dom';
=======
>>>>>>> 2ad13173802c2c7eceae49d9183d1c0819ad74d0
import MainRoutes from './components/routes/MainRoutes';
import { BrowserRouter } from 'react-router-dom';

function App() {
  const [user, setUser] = useState(JSON.parse(sessionStorage.getItem('USER')));
  
  return (
    <div className="App">
        <BrowserRouter>
            <Menu></Menu>
            <Footer></Footer>
        </BrowserRouter>
    </div>
  );
}

export default App;
