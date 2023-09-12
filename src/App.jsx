import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes instead of Switch
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import HomePage from './pages/homePage/HomePage';

function App() {
  return (
    <Router>
      <>
        <div className="content">
          <Sidebar />
          <Navbar />
          <HomePage />
        </div>
      </>
    </Router>
  );
}

export default App;

