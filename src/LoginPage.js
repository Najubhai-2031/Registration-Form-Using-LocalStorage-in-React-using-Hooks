import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage(props) {

    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault();
        let newEmail = localStorage.getItem('email')
        let newPassword = localStorage.getItem('password')

        if (email === newEmail && password === newPassword) {
            navigate('/Home')
        }
        else {
            if (email !== newEmail && password !== newPassword) {
                window.alert('Both Email and Password are Invalid')
            }
            else if (email !== newEmail) {
                window.alert('Email is Invalid')
            }
            else (
                window.alert('Password is Invalid')
            )
        }
    }

    return (
        <React.Fragment>
            <div className='App main_div'>
                <form onSubmit={handleSubmit}>
                <h1>Sign in</h1>
                    Email<input type='email' name='email' onChange={e => setEmail(e.target.value)} value={email} /><br />
                    Password<input type='password' name='password' onChange={e => setPassword(e.target.value)} value={password} /><br />
                    <button type='submit'>Login</button>
                <button onClick={() => navigate('/')}>Register Here</button>
                </form>
            </div>
        </React.Fragment>
    );
}

export default LoginPage;