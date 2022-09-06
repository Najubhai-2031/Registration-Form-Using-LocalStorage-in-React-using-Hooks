import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ForgotPassword(props) {

    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = () => {
        let newEmail = (localStorage.getItem('email'))
        let newPassword = localStorage.getItem('password')
        if (email !== newEmail) {
            window.alert('Email Does not Match')
        }
        else {
            setPassword(newPassword)
        }
    }

    return (
        <React.Fragment>
            <div className='App main_div ForPass'>
            <h1>Forgot Password</h1>
                Email<input className='email' type='email' onChange={e => setEmail(e.target.value)} /><br />
                <button onClick={handleSubmit}>Submit</button>
                <h1>Your Password is {password}</h1>
                <button onClick={() => navigate('/Home')}>Go To Home Page</button>
            </div>
        </React.Fragment>
    );
}

export default ForgotPassword;
