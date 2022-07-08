import React from "react";
import './App.css';
import Nav from './components/Nav';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Showcase from './components/Showcase';
import ErrorPage from './components/ErrorPage';


import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Portfolio />}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/showcase/:id" element={<Showcase/>}/>
          <Route path="*" element={<ErrorPage/>}/>
        </Routes>
      </div>
    </Router>      
  );
}


export default App;