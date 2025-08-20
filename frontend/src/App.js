import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Login from './components/pages/auth/Login';
import Register from './components/pages/auth/Register';
import Home from './components/pages/Home';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>

        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>}/>
        <Route path="/" element={<Home/>}/>

      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
