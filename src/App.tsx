import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import PageExample from './pages/PageExample';
import Login from './pages/Login';
import Navbar from './components/Navbar';

function AppContent() {
  const location = useLocation();
  // Hide dev Navbar on login page
  const hideNavbar = location.pathname === '/login';

  return (
    <>
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/page-2" element={<Page2 />} />
        <Route path="/login" element={<Login />} />
        <Route path="/page-example" element={<PageExample />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;