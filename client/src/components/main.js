import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function Mainpage() {
    const [Name, setName] = useState('');
    const [CName, setcompany] = useState('');
    const [domain, setdomain] = useState('');
    const [conStatus, setconstatus] = useState('');
    const [broadStatus, setbroadStatus] = useState('');
    const [lead, setLead] = useState('');

    const submitValue = () => {
        const frmdetails = {
            'Lead Name' : setName,
            'Lead Company' : setcompany,
            'lead domain' : setdomain,
            'lead conversion status' : setconstatus,
            'lead broadcast status' : setbroadStatus,
            'set lead' : setLead
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
        <>
        <h1>Hi {Name}</h1>
         <form className="form" method="POST">
         <hr/>
            <input type="text" placeholder="Lead Name" onChange={e => setName(e.target.value)} />
            <input type="text" placeholder="Lead Company" onChange={e => setcompany(e.target.value)} />
            <input type="text" placeholder="lead domain" onChange={e => setdomain(e.target.value)} />
            <input type="text" placeholder="lead conversion status" onChange={e => setconstatus(e.target.value)} />
            <input type="text" placeholder="lead broadcast status" onChange={e => setbroadStatus(e.target.value)} />
            <input type="text" placeholder="lead created by" onChange={e => setLead(e.target.value)} />
            <button className="btn" onClick={submitValue}>Submit</button>
         </form>

         <div className="btn1"><button >
            <Link className="signout" to = "/">Sign out</Link>  
        </button> 
        </div> 
        </>
    )
}

export default Mainpage
