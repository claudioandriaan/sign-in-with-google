import React, { useState, useEffect } from 'react';
import { auth, provider } from './config';
import { signInWithPopup } from 'firebase/auth';  
import Home from './Home';

const Signin = () => {
  const [value, setValue] = useState("");

  const handleClick = () => {
    signInWithPopup(auth, provider)
      .then((data) => {
        setValue(data.user.email);
        localStorage.setItem("email", data.user.email);
      })
      .catch((error) => {
        console.error("Error signing in with Google:", error.message);
      });
  } 

  useEffect(() => {
    setValue(localStorage.getItem('email'));
  }, []); // Empty dependency array to run only once when the component mounts

  return (
    <>
      {value ? <Home /> :  
        <button onClick={handleClick}>Sign in with Google</button>
      }
    </>
  );
}


export default Signin;
