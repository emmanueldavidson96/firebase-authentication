import { useState } from 'react'
import "../dist/output.css";
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Createguide from './pages/Createguide';
import Home from './pages/Home';
import Account from './pages/Account';

function App() {
  const [is_auth, set_is_auth] = useState(localStorage.getItem('is_auth'));  
  return (
    <Router>
      <Header is_auth={is_auth} set_is_auth={set_is_auth}/>
      <div className='w-full'>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/login' element={<Login set_is_auth={set_is_auth}/>} />
          <Route path='/createguide' element={<Createguide/>} />  
          <Route path='/account' element={<Account/>} />      
        </Routes>
      </div>
    </Router>
  )
}

export default App
