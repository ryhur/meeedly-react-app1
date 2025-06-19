import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Settings from './pages/Settings';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="page">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;