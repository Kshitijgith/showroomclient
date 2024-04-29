
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route,  Routes } from 'react-router-dom'
import Login from './assets/components/Login'
import Signup from './assets/components/Signup'
import Service from'./assets/components/Service'
import Contact from './assets/components/Contact';
import Main from './assets/components/Main'

import Cartypes from './assets/components/types/Cartypes';

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Cartypes" element={<Cartypes />}/>
        
          
    </Routes>
</BrowserRouter>

  );
}

export default App

