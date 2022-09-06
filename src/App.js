// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import RegistrationForm from './RegistrationForm';
import LoginPage from './LoginPage';
import ChangePassword from './ChangePassword';
import ForgotPassword from './ForgotPassword';

function App() {
  return (
    <React.Fragment>
      <Router>
        <div className='menu App'>
          <Link to='/'>Sign up</Link>
          <Link to='/LoginPage'>Sign in</Link>
        </div>
        <Routes>
          <Route path='/' element={<RegistrationForm />} />
          <Route path='/LoginPage' element={<LoginPage />} />
          <Route path='/Home' element={<Home />} />
          <Route path='/ChangePassword' element={<ChangePassword />} />
          <Route path='/ForgotPassword' element={<ForgotPassword />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
