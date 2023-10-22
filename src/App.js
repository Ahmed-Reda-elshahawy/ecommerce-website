import { Outlet, Route, Routes, useLocation } from 'react-router-dom';
import './App.scss';
import Header from './components/Header';
import Home from './pages/Home/Home';
import Cart from './components/Cart';
import Footer from './components/Footer';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';
import Dashbourd from './pages/Dashboard/Dashboard';


function App() {
  const location = useLocation();

  const renderHeader = () => {
    if (location.pathname !== '/dashboard') {
      return <Header />;
    }
  };

  const renderFooter = () => {
    if (location.pathname !== '/dashboard') {
      return <Footer />;
    }
  };

  return (
    <div className="App">
      {renderHeader()}
      <Routes>
        <Route path='/' element={<><Outlet /></>}>
          <Route path="" element={<Home />} />
          <Route path="cart" element={<Cart />} />
        </Route>
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='dashboard' element={<Dashbourd />} />
      </Routes>
      {renderFooter()}
    </div>
  );
}

export default App;
