import { NavLink } from "react-router-dom";
// import Navlink from "./Navlink.Jsx";
import "./header.css"
import { useContext } from "react";
import { AuthenticationContext } from "../AuthProvider/AthenticationProvider";



const Header = () => {
    // const location = useLocation()
    // const navLinks

    //use context 
    const authInformation = useContext(AuthenticationContext)

    const { user, userLogOut } = authInformation
    const signOutHandler = () => {
        userLogOut()
            .then(() => {
                console.log('user logged out successfully')
            })
            .catch(error => console.error(error))
    }

    return (

        <div className="navbar bg-base-100 container mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li className="text-[18px} font-medium"><NavLink className={({ isActive }) => (isActive ? "active-style" : 'none')}>Home</NavLink></li>
                        <li className="text-[18px] font-medium"><NavLink to={'/services'} >Our services</NavLink></li>
                        <li className="text-[18px] font-medium"><NavLink to={'/portfolio'} >Portfolio</NavLink></li>
                        <li className="text-[18px] font-medium"><NavLink to={'/about'}>About</NavLink></li>
                    </ul>
                </div>
                <h2 className="text-4xl font-bold"><span className="text-[#F71735] ">social</span>vent</h2>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li className="text-[xl] font-medium"><NavLink to={'/'}>Home</NavLink></li>
                    <li className="text-[xl] font-medium"><NavLink to={'/services'}>Our services</NavLink></li>
                    <li className="text-[xl] font-medium"><NavLink to={'/portfolio'} >Portfolio</NavLink></li>
                    <li className="text-[xl] font-medium"><NavLink to={'/about'}>About</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end">
                {


                    user ? <>  <div className="flex justify-items-end items-center   text-[12px] lg:text-[14px]">
                        {user.displayName}<img className=" rounded-full w-6 h-6 md:w-7 md:h-7 lg:h-7 lg:w-7 ml-2 " src={`${user.photoURL}`}></img>
                    </div>
                        <button onClick={signOutHandler} className="btn btn-sm px-2 py-1 ml-1 md:ml-2 lg:ml-2">Log Out</button>
                    </> : <><NavLink to="/login"><button className="btn btn-sm mr-2">Log in</button></NavLink><NavLink to="/register"><button className="btn btn-sm">Register</button></NavLink></>
                }

            </div>
        </div>
    );
};

export default Header;