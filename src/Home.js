import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home(props) {

    const [name, setName] = useState('')
    const navigate = useNavigate();

    useEffect(() => {
        let aa = localStorage.getItem('name')
        setName(aa)
    }, [name])


    const removeData = () => {
        localStorage.clear()
        window.alert('All Data are Removed')
        navigate('/')
    }

    return (
        <React.Fragment>
            <div className='App main_div'>
                <h1>Home</h1>
                <h3>Hi, {name} 😇</h3>
                <button onClick={() => navigate('/ChangePassword')}>Change Password</button>&nbsp;
                <button type='submit' onClick={removeData}>Remove All Data</button>
            </div>
        </React.Fragment>
    );
}

export default Home;