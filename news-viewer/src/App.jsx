import { useState, useCallback } from 'react'
import axios from 'axios';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NewsPage from './NewsPage';

function App() {
  // const [category, setCategory] = useState('all');
  // const onSelect = useCallback(category => setCategory(category), []);

  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<NewsPage/>}/>
      <Route path="/:category" element={<NewsPage/>}/>
    </Routes>
   </BrowserRouter>
     )
}

export default App
