import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Login, About, Contact, Education, Experience, Extracurricular, Home, Works, Tech } from './components';
import Navbar from './components/Navbar';

function AppContent() {
  const location = useLocation();

  // Check if current path is login
  const isLoginPage = location.pathname === '/';

  return (
    <>
      {!isLoginPage && <Navbar />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/education" element={<Education />} />
        <Route path="/works" element={<Works />} />
        <Route path="/tech" element={<Tech />} />
        <Route path="/extracurricular" element={<Extracurricular />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
