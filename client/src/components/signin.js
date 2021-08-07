import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function Signin() {
    const [Name, setName] = useState('');
    const submitValue = () => {
        const frmdetails = {
            'Name' : setName,
        }
        console.log(frmdetails);
    }
    useEffect(()=>[
        fetch('http://localhost:5000/register')
        .then(res=>{
            return res.json();
        }).then(data=>{
            console.log(data);
        })
    ])

    return (
        <div className="signin">
            <h1 className="heading">Enter Username</h1>
        <input className="inpt1" type="text" placeholder="Enter Username" 
        onChange={e => setName(e.target.value)}/>
        <button className="btn1" onClick={submitValue}>
            <Link className="link" to = "/Mainpage">SignIn</Link> 
        </button>

        </div>
    )
}

export default Signin
