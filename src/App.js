//import logo from './logo.svg';
import './App.css';
import React from 'react'
 
import Navigation from './components/Navigation' 
import Askme from './components/Askme';
import Home from './components/Home';
import ScientificArticles from './components/ScientificArticles';
import YoutubeVideos from './components/YoutubeVideos';
import Tweet from './components/Tweet';



import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
    <Navigation/> 
    <Routes> 
     
    <Route path="/" exact element={<Home/>}/>
    <Route path="/scientific articles" exact element={<ScientificArticles/>}/>
    <Route path="/youtube videos" exact element={<YoutubeVideos/>}/>
    <Route path="/Ask me a specific question" exact element={<Askme/>}/>
    <Route path="/tweets" exact element={<Tweet/>}/>
     
    </Routes>
    </div>
    </Router>
    
  );
}

export default App;
