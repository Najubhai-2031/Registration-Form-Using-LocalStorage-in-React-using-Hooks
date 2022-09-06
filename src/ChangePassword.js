import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ChangePassword(props) {

    const navigate = useNavigate('')
    const [opassword, setOpassword] = useState('')
    const [npassword, setNpassword] = useState('')
    const [cpassword, setCpassword] = useState('')


    const handleSubmit = (event) => {
        event.preventDefault();
        let newPassword = localStorage.getItem('password')

        if (newPassword !== opassword) {
            window.alert('Old Password Did Not match')
        }
        else if (npassword !== cpassword) {
            window.alert('Confirm Password Did not metch')

        }
        else if (opassword === npassword) {
            window.alert('Old Password and New Password must not be Same')
        }
        else {
            localStorage.setItem('password', npassword)
            window.alert('Password Change Successfully')
            navigate('/LoginPage')
        }
    }

    return (
        <React.Fragment>
            <div className='App main_div'>
            <form onSubmit={handleSubmit}>
            <h1>Change Password</h1>
                Enter Old Password<input type='password' onChange={e => setOpassword(e.target.value)} /><br />
                Enter New Password<input type='password' onChange={e => setNpassword(e.target.value)} /><br />
                Re-Enter New Password<input type='password' onChange={e => setCpassword(e.target.value)} /><br />
                <button type='submit'>Submit</button>
                <button onClick={()=>navigate('/Home')}>Cancle</button>
            </form>
            </div>
        </React.Fragment>
    );
}

export default ChangePassword;