import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Menu from './core/components/layout/Menu';

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
