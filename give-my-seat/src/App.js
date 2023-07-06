import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './routes/Landing';
import Login from './routes/Login';
import Main from './routes/Main';
import Cafe from './routes/Cafe';
import Seat from './routes/Seat.js';
import List from './routes/List.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/main" element={<Main />} />
        <Route path="/list" element={<List />} />
        <Route path="/cafe" element={<Cafe />}>
          <Route path="seat" element={<Seat />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
