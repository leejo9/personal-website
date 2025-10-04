
import CreativePage from './pages/Creative';
import MainPage from './pages/MainPage';
import './App.css'
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/creative" element={<CreativePage />} />
      </Routes>
    </div>
  );
}

export default App
