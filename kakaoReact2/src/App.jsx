import './App.css'
import {Routes, Route} from 'react-router-dom';
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
import Profile from './Pages/Profile.jsx';
import Person from './Pages/Person'
import Article from './Pages/Article.jsx';
import Articles from './Pages/Articles.jsx';
import Nav from './Pages/Nav.jsx';
import Layout from './Layout.jsx';

function App() {
  return (

      <Routes>
        <Route element={<Layout/>}>
          <Route path="/about" element={<About/>}/>
          <Route path="/profiles/:username" element={<Profile />}/>
          <Route path="/person" element={<Person />}/>
          <Route path="/" element={<Home/>}/>
        </Route>
        <Route path="/articles" element={<Articles />}>
          <Route path=":id" element={<Article />}/> 
        </Route>
      </Routes>
  )
}

export default App