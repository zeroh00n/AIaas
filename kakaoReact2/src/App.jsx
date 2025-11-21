import './App.css'
import {Routes, Route} from 'react-router-dom';
import Home from './BBS/Home.jsx';
import Signup from './BBS/Signup.jsx';
import Signin from './BBS/Signin.jsx';
import Write from './BBS/Write.jsx';
import View from './BBS/View.jsx';


function App() {
  return (

        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/signin" element={<Signin />}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path='/write' element={<Write />}/>
            <Route path='/view' element={<View/>}/>
        </Routes>
  )
}

export default App