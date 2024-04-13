import { ToastContainer } from 'react-toastify';
import './App.css';
import NavbarComponent from './components/Navbar';
import AppRouter from './router';
import { ScrollProvider } from './context/ScrollContext';
import { useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();

  const isShowNavbar = () => {
    if (location.pathname === '/login' || location.pathname === '/register') {
      return false;
    }
    return true;
  };

  return (
    <div className="App">
      <ScrollProvider>
        {
          isShowNavbar() && <NavbarComponent />
        }
        <AppRouter />
        <ToastContainer position='top-center' />
      </ScrollProvider>
    </div>
  );
}

export default App;
