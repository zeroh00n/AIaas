import './App.css'
import Refuse from './Refuse.jsx'
import {Routes, Route} from 'react-router-dom';
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
import Profile from './Pages/Profile.jsx';
import Person from './Pages/Person'

function App() {
  return (

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/profiles/:username" element={<Profile />}/>
        <Route path="/person" element={<Person />}/>
      </Routes>
  )
}

export default App