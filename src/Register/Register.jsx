import { updateProfile } from "firebase/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import auth from "../FirebaseConfig/firebaseConfig";
import { useContext } from "react";
import { AuthenticationContext } from "../AuthProvider/AthenticationProvider";


const Register = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const authInformation = useContext(AuthenticationContext)
    const {userCreate} = authInformation

    const handleSubmit = (e) => {
        const password = e.target.password.value
        const name = e.target.name.value
        const email = e.target.email.value
        const uppercase= /[A-Z]/;
        const specialChar=/[\W_]/;
        if (!uppercase.test(password)) {

            return toast("Password should have atleast one uppercase letter")
        } else if (!specialChar.test(password)) {
            return toast("Password should have at least one special character")
        } else {
            userCreate(email,password)
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
                    }, 2000);
    
                })
                .catch(() => toast("password should be at least 6 characters"))
        }

    }
    


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2 className="text-5xl mb-3 font-semibold text-center">Register now</h2>
                <div className="flex justify-center">
                    <div className="p-5 w-full md:w-1/2 lg:w-1/3 border-2 rounded-lg">
                        <label>Name:</label>
                        <input type="text" className="px-2 py-1 outline-none border-2 border-slate-700 rounded-lg w-full" name="name" placeholder="Your name" required></input>
                        <label>Email:</label>
                        <input type="email" className="px-2 py-1 outline-none border-2 border-slate-700 rounded-lg w-full" name="email" placeholder="Your Email" required></input>
                        <label>Password:</label>
                        <input type="password" className="px-2 py-1 outline-none border-2 border-slate-700 rounded-lg w-full" placeholder="password" name="password" required></input>
                        <div className="my-5"><button className=" btn btn-primary">Register</button></div>
                        <p className="label-text-alt link link-hover text-[16px] mt-2"><Link to={'/login'}>Already have an account ? please login</Link></p>

                    </div>
                    <ToastContainer></ToastContainer>
                </div>
            </form>
        </div>
    );
};

export default Register;