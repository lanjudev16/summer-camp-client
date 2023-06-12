import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import { Helmet } from 'react-helmet';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';
import {
    FaAssistiveListeningSystems, FaEye, FaEyeSlash,
  } from "react-icons/fa";
const Login = () => {
    const [icon,setIcon]=useState(true)
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    title: 'User Login Successful.',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });
                navigate(from, { replace: true });
            })
    }

    return (
        <>
            <Helmet>
                <title>Login</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content w-full ">
                    <div className="card  shadow-2xl bg-base-100 w-1/2">
                        <form onSubmit={handleLogin} className="card-body ">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control relative">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={icon?"password":"text"} name="password" placeholder="password" className="input input-bordered" />
                                <span className='absolute top-[40%] right-5 text-2xl' onClick={()=>setIcon(icon?false:true)}>{icon?<><FaEye></FaEye></>:<><FaEyeSlash></FaEyeSlash></>}</span>
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input disabled={false} className="btn btn-danger" type="submit" value="Login" />
                            </div>
                        </form>
                        <div className="divider">OR</div>
                        <SocialLogin></SocialLogin>
                        <p className='text-2xl p-5'>New Here? <Link to="/signup">Create an account</Link> </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;