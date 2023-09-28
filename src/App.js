import './App.css';
import Menu from './core/components/layout/Menu';
<<<<<<< HEAD
import Footer from './core/components/layout/Footer';
import { BrowserRouter } from 'react-router-dom';
=======
>>>>>>> 2ad13173802c2c7eceae49d9183d1c0819ad74d0
import MainRoutes from './components/routes/MainRoutes';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
        <BrowserRouter>
            <Menu></Menu>
        </BrowserRouter>
=======
      <BrowserRouter>
        <Menu />
        <MainRoutes />
      </BrowserRouter>
>>>>>>> 2ad13173802c2c7eceae49d9183d1c0819ad74d0
    </div>
  );
}

export default App;
