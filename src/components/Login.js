import React from 'react'
import Header from './Header'
import { useState } from 'react';
const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    };

  return (
    <div>
        <Header/>
        <div>
            <img alt="Login" src="https://assets.nflxext.com/ffe/siteui/vlv3/2f42605e-e786-4a06-8612-ebc67c55ba6c/web/IN-en-20260629-TRIFECTA-perspective_76b17e8c-cff9-4c65-9938-08ca5029be6b_large.jpg"/>
        </div>
        <form className="text-white p-12 bg-black/75 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg">
            <h1 className="text-3xl font-bold py-2" >{isSignInForm ? "Sign In":"Sign Up"}</h1>
            {!isSignInForm && (
                <input type="text" placeholder="Full Name" className='p-4 my-2 w-full  bg-gray-700'/>
            )}
            <input type="text" placeholder="Email or phone number" className='p-4 my-2 w-full  bg-gray-700'/>
            <br/>
            <input type="password" placeholder="Password" className='p-4 my-2 w-full bg-gray-700'/>
            <br/>
            <p onClick={toggleSignInForm}>
    New to Netflix? Sign Up Now
</p>
  
        </form>
    </div>
  )
}

export default Login;