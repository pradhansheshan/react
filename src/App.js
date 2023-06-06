
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import ContactUs from './pages/ContactUs';
import Couple from './pages/Couple';
import Image from './pages/Image';
import { CoupleProvider } from './context/couples/CoupleContext';


function App() {
  return (
    <CoupleProvider>
    <Router>
      <div className='flex flex-col justify-between h-screen bg-slate-900'>
          <Navbar className='grow'/>
          <main className='container mt-48 mx-auto px-3 flex flex-col'>
            
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/couple/:login' element={<Couple />} />
              <Route path='/couple/:login/:img' element={<Image />} />
              <Route path='/notfound' element={<NotFound />} />
              <Route path='/contact' element={<ContactUs />} />
              <Route path='/*' element={<NotFound />} />
            </Routes>
            
          </main>
          <Footer></Footer>
      </div>
    </Router>
    </CoupleProvider>
  );
}

export default App;
