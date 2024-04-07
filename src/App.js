import { ToastContainer } from 'react-bootstrap';
import './App.css';
import NavbarComponent from './components/Navbar';
import AppRouter from './router';

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <AppRouter />
      <ToastContainer position='top-center' />
    </div>
  );
}

export default App;
