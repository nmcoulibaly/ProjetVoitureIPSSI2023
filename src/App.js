import './App.css';
import Menu from './core/components/layout/Menu';
import MainRoutes from './components/routes/MainRoutes';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Menu />
        <MainRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
