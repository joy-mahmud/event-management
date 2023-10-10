import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { AuthenticationContext } from "../AuthProvider/AthenticationProvider";


const Login = () => {
    const navigate = useNavigate()
    const location = useLocation()

    const {userSignIn,googleSignIn} = useContext(AuthenticationContext)
    const GoogleSignInHandler =()=>{
       
        googleSignIn()
            .then(()=>{
                toast("you logged in successfully")
                setTimeout(function() {
                    navigate(location?.state?location.state:"/")
                  }, 2000);
            })
            .catch(()=>toast("something goes wrong!"))
      
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        const password = e.target.password.value;
        const email = e.target.email.value;
    
        userSignIn(email,password)
        .then(() =>{
          
            e.target.reset()
            toast("logged in successfully")
            setTimeout(function() {
                navigate(location?.state?location.state:"/")
              }, 2000);
           

        })
        .catch(() =>{
            toast("Email or password doesn't match")
        })


    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center ">
                    <h1 className="text-5xl font-bold">Log in now!</h1>
                   
                </div>
                <div className="card shadow-2xl bg-base-100 flex-shrink-0 w-full max-w-sm ">
                    <form onSubmit={handleSubmit} className="card-body">
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
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                            <ToastContainer />
                        </div>
                        <label className="label">
                        <Link to={'/register'}><p href="#" className="label-text-alt link link-hover text-[16px] mt-2">Dont have account? please register</p></Link>
                            </label>
                            <button onClick={GoogleSignInHandler} className="btn btn-primary">Sign in with google</button>    
                    </form>
                    
                </div>
            </div>
            
        </div>
    );
};

export default Login;