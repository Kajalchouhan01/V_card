import React, { useState } from 'react'
useState
import { RxCross2 } from "react-icons/rx";

const Form = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [profile, setProfile] = useState("");
    const [showForm, setShowForm] = useState(true);

    const submitHandler = (e) => {
        e.preventDefault();
        alert("your form has been subited" + name + email + password + profile);
        setEmail("");
        setName("");
        setPassword("");
        setProfile("");

       
    };
    
      const handleClose = () => {
        setShowForm(false);
      };
    

    

    return (
        <div className="form-container">
            <div className="container my-5 bg-black text-light p-3" style={{ width: '350px', borderRadius: '10px', border: '1px solid orange' }}>
                <div className="cross">
                
                <div className='button'>
                <button className="close-button" onClick={handleClose}><RxCross2 /></button>
                </div>
                    <div><h1 className='text-center'>HELLO!</h1>
                    </div>
                    
                </div>
                <p>I would like to be in touch with you </p>
                <p> can you please drop the below information so that i can save your details.</p>
                <form onSubmit={submitHandler}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                        <input value={name} onChange={(e) => setName(e.target.value)} type="text" className="form-control bg-black text-light" />

                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label text-light">Email address</label>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control bg-black text-light" />

                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label text-light">Password</label>
                        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="form-control bg-black text-light" />
                    </div>

                    <div className="d-grid col-6 mx-auto mt-5">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form

