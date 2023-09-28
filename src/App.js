import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Menu from './core/components/layout/Menu';
import Footer from './core/components/layout/Footer';

function App() {
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
