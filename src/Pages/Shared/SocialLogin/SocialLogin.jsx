import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const SocialLogin = () => {
    const location=useLocation()
    const from=location.state?.from?.pathname || "/"
    const {googleSignIn}=useContext(AuthContext)
    const navigate=useNavigate()
    const handleGoogleSignIn=()=>{
        googleSignIn()
        .then(result=>{
            console.log(result)
            navigate(from,{replace:true})
        })
        .catch(error=>{
            console.log(error)
        })
    }
    return (
        <div>
            <button onClick={handleGoogleSignIn} className='gap-2 shadow w-full mt-2 flex justify-between px-3 border rounded py-3'><img width="30px" height="30px" src="https://i.ibb.co/8MT20C8/google.png" alt="" /> <span>Sign in with google</span> </button>
        </div>
    );
};

export default SocialLogin;