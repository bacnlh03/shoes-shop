import { ToastContainer } from 'react-toastify';
import './App.css';
import NavbarComponent from './components/Navbar';
import AppRouter from './router';
import { ScrollProvider } from './context/ScrollContext';

function App() {
  return (
    <div className="App">
      <ScrollProvider>
        <NavbarComponent />
        <AppRouter />
        <ToastContainer position='top-center' />
      </ScrollProvider>
    </div>
  );
}

export default App;
