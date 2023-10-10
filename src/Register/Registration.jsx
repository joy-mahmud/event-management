
import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { AuthenticationContext } from '../AuthProvider/AthenticationProvider';
import { getAuth, updateProfile } from 'firebase/auth';
import 'react-toastify/dist/ReactToastify.css';

const Registration = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const authInformation = useContext(AuthenticationContext)
    
    

    const { userCreate} = authInformation
    const[msg,setmsg] =useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        const name = e.target.name.value
        const uppercase = /[A-Z]/;
        const SpecialChar = /[\W_]/;
        const auth = getAuth();
        //check password validation
        if (!uppercase.test(password)) {

            return setmsg("PLease enter at least one uppercase letter In the password")
        } else if (!SpecialChar.test(password)) {
            return setmsg("Password should have at least one special character")
        } else {
            userCreate(email, password)
                .then(() => {
                     e.target.reset()
                    toast("you registered successfully")


                    updateProfile(auth.currentUser, {
                        displayName: name,
                    }).then(() => {
                        console.log("Profile updated successfully")
                    }).catch(() => {

                    });
                    setTimeout(function () {
                        navigate(location?.state ? location.state : "/")
                    }, 15000);

                })
                .catch(() => setmsg("password should be at least 6 characters"))
        }



    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center ">
                    <h1 className="text-5xl font-bold">Register now!</h1>

                </div>
                <div className="card max-w-sm shadow-2xl flex-shrink-0 w-full  bg-base-100">
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Your name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />

                        </div>
                        <p className="label-text-alt link link-hover text-[16px] mt-2"><Link to={'/login'}>Already have an account ? please login</Link></p>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                            <p>{msg}</p>
                            <ToastContainer></ToastContainer>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Registration;