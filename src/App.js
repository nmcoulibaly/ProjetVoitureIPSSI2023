import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import MainRoutes from './components/routes/MainRoutes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MainRoutes></MainRoutes>
      </BrowserRouter>
    </div>
  );
}

export default App;
