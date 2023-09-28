import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Menu from './core/components/layout/Menu';
import Footer from './core/components/layout/Footer';
import { BrowserRouter } from 'react-router-dom';
import MainRoutes from './components/routes/MainRoutes';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Menu></Menu>
        </BrowserRouter>
    </div>
  );
}

export default App;
