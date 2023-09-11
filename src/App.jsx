import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes instead of Switch
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
          <Sidebar />
          <Navbar />
        </div>
      </div>
    </Router>
  );
}

export default App;

