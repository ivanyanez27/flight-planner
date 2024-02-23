import React, { useState } from 'react';
import HelloWorld from './HelloWorld';
import axios from 'axios';
import './RegistrationForm.css'


function RegistrationForm() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [number, setNumber] = useState('');

    const handleSubmit = async (evt) => {
        evt.preventDefault()

        const userData = {
            firstName,
            lastName,
            username,
            password,
            email,
            address,
            number
        }
    }

    return (
        <div>
            <h2>Registration Form</h2>
            <form onSubmit={handleSubmit}>
                <div className='formFields'>
                    <label htmlFor='firstName'>First Name:</label>
                    <input
                        type='text'
                        id='firstName'
                        value={firstName}
                        onChange={(evt) => setFirstName(evt.target.value)}
                        required
                    />
                </div>
                <div className='formFields'>
                    <label htmlFor='lastName'>Last Name:</label>
                    <input
                        type='text'
                        id='lastName'
                        value={lastName}
                        onChange={(evt) => setLastName(evt.target.value)}
                        required
                    />
                </div>
                <div className='formFields'>
                    <label htmlFor='username'>Username:</label>
                    <input
                        type='text'
                        id='username'
                        value={username}
                        onChange={(evt) => setUsername(evt.target.value)}
                        required
                    />
                </div>
                <div className='formFields'>
                    <label htmlFor='email'>Email:</label>
                    <input
                        type='text'
                        id='email'
                        value={email}
                        onChange={(evt) => setEmail(evt.target.value)}
                        required
                    />
                </div>
                <div className='formFields'>
                    <label htmlFor='password'>Password:</label>
                    <input
                        type='text'
                        id='password'
                        value={password}
                        onChange={(evt) => setPassword(evt.target.value)}
                        required
                    />
                </div>
                <div className='formFields'>
                    <label htmlFor='address'>Address:</label>
                    <input
                        type='text'
                        id='address'
                        value={address}
                        onChange={(evt) => setAddress(evt.target.value)}
                        required
                    />
                </div>
                <div className='formFields'>
                    <label htmlFor='number'>Number:</label>
                    <input
                        type='text'
                        id='number'
                        value={number}
                        onChange={(evt) => setNumber(evt.target.value)}
                        required
                    />
                </div>

            </form>
        </div>
    )
}

export default RegistrationForm;