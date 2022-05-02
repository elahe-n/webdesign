import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Feedback from './pages/Feedback'
import Contact from './pages/Contact'
import Header from './components/Header'
import Footer from './components/Footer'



function App() {
  return (
    <>
    <Router>
    <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/feedback' element={<Feedback />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </Router>

    </>
  );
}

export default App;
