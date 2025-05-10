import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Correct import

export default function SignUp() {
    const [input, setInput] = useState({
        fullName: '',
        mobileNumber: '',
        email: '',
        password: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInput({
            ...input,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5200/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(input)
            });
            if (response.ok) {
                const data = await response.json();
                console.log('Data saved successfully:', data);
                navigate('/login');
            } else {
                // Handle non-2xx HTTP responses
                const errorData = await response.json();
                console.error('Error:', errorData.message);
            }
        } catch (err) {
            console.error('Error:', err);
        }
    };

    const handleNext = () => {
        navigate('/login');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange} name="fullName" value={input.fullName} placeholder="Full Name" />
            <input type="text" onChange={handleChange} name="mobileNumber" value={input.mobileNumber} placeholder="Mobile Number" />
            <input type="email" onChange={handleChange} name="email" value={input.email} placeholder="Email" />
            <input type="password" onChange={handleChange} name="password" value={input.password} placeholder="Password" />
            <div>
                <button type="submit">Sign Up</button>
                <button type="button" onClick={handleNext}>Already have an account</button>
            </div>
        </form>
    );
}
