import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RegistrationForm.css'



function RegistrationForm(props) {

    const navigate = useNavigate();

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault();
        let newEmail = localStorage.getItem('email')
        if ((name === "" || name === null) && (email === '' || email === null) && (password === "" || password === null)) {
            window.alert("Please Enter Value")
        }
        else if (email === newEmail) {
            window.alert('Email id Aleady Exist')
        }
        else {
            localStorage.setItem('name', name)
            localStorage.setItem('email', email)
            localStorage.setItem('password', password)
            window.alert('Registration Succesfull')
            navigate('/LoginPage')
        }

    }


    return (
        <React.Fragment>
            <div className='App main_div'>
                <form onSubmit={handleSubmit}>
                    <h1>Sign up</h1>
                    Name <input type='text' name='name' onChange={(e) => setName(e.target.value)} /><br />
                    Email <input type='email' name='email' onChange={(e) => setEmail(e.target.value)} /><br />
                    Password <input type='password' name='password' onChange={(e) => setPassword(e.target.value)} /><br />
                    <button type='submit'>Submit</button>
                    <div className='Appone'>
                        <button onClick={() => navigate('/LoginPage')}>Login</button>&nbsp;
                        <button onClick={() => navigate('/ForgotPassword')}>Forgot Password</button>
                    </div>
                </form>
            </div>
        </React.Fragment>
    );
}

export default RegistrationForm;