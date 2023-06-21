import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import useAxiosSecure from '../../../hook/useAxiosSecure';
import Swal from 'sweetalert2';

const SocialLogin = () => {
    const [axiosSecure]=useAxiosSecure()
    const location=useLocation()
    const from=location.state?.from?.pathname || "/"
    const {googleSignIn}=useContext(AuthContext)
    const navigate=useNavigate()
    const handleGoogleSignIn=()=>{
        googleSignIn()
        .then(result=>{
            console.log(result)
            const saveUser={name:result.user.displayName,email:result.user.email,image:result.user.photoURL}
            console.log(saveUser)
            axiosSecure.post(`/users/${result?.user?.email}`, saveUser).then((data) => {
                if (data.data.insertedId) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Data successfully insert',
                        showConfirmButton: false,
                        timer: 1500
                      })
                  navigate("/");
                }
              });
            navigate(from,{replace:true})
        })
        .catch(error=>{
            console.log(error)
        })
    }
    return (
        <div>
            <button onClick={handleGoogleSignIn} className='bg-white text-black gap-2 shadow w-[90%] mx-auto mt-2 flex justify-between px-3 border rounded-2xl py-3'><img width="30px" height="30px" src="https://i.ibb.co/8MT20C8/google.png" alt="" /> <span>Sign in with google</span> </button>
        </div>
    );
};

export default SocialLogin;