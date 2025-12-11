import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Home';
import Signup from './Signup';
import Login from './Login';
import Writing from './Writing';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/writing" element={<Writing />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;