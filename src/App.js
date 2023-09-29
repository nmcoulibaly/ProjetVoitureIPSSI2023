import './App.css';
import Menu from './core/components/layout/Menu';
import MainRoutes from './components/routes/MainRoutes';
import { BrowserRouter } from 'react-router-dom';
import Footer from './core/components/layout/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Menu />
        <MainRoutes />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
