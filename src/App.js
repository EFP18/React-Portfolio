import './App.css';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App" >
      {/* anything between the browserrouter tag is react router dom functionality */}
      <BrowserRouter>
        <Header></Header>  
        {/* conditionally rendered routes */}
          <Routes>
            {/* when on localhost:3000 / route, only display the Home page */}
            {/* endpoints */}
            <Route path="/" element={<Home/>}/>
            <Route path="/Portfolio" element={<Portfolio/>}/>
            <Route path="/Resume" element={<Resume/>}/>
            <Route path="/Contact" element={<Contact/>}/>
          </Routes>
      
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
