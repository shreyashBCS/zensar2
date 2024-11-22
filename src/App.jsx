import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Component/HomePage';
import Services from './Component/Services';
import Industries from './Component/Industries';
import Insights from './Component/Insight';
import People from './Component/People';
import AboutZensar from './Component/AboutZensar';
import Contact from './Component/Contact';
import Navbar from './Component/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/services' element={<Services />} />
        <Route path='/industries' element={<Industries />} />
        <Route path='/insight' element={<Insights />} />
        <Route path='/people' element={<People />} />
        <Route path='/aboutzensar' element={<AboutZensar />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;