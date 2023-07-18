import '../src/styles/App.css';
// import all the components
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import { HashRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      {/* anything between the browserrouter tag is react router dom functionality */}
      <HashRouter>
        <Header></Header>
        {/* conditionally rendered routes */}
        <Routes>
          {/* when on localhost:3000 / route, only display the Home page */}
          {/* endpoints */}
          <Route path='/' element={<AboutMe />} />
          <Route path='/Portfolio' element={<Portfolio />} />
          <Route path='/Resume' element={<Resume />} />
          <Route path='/Contact' element={<ContactForm />} />
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
