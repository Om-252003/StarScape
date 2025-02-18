import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages';
import { PhotoDetail } from './pages/PhotoDetail';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/photo/:id" element={<PhotoDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
