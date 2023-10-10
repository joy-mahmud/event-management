import { createContext, useEffect, useState } from "react";
import {onAuthStateChanged,signOut, signInWithPopup,signInWithEmailAndPassword,createUserWithEmailAndPassword, GoogleAuthProvider} from "firebase/auth"
import auth from "../FirebaseConfig/firebaseConfig"
//google privider

const providerGoogle = new GoogleAuthProvider()

//Creating context
export const AuthenticationContext = createContext(null)
const AthenticationProvider = ({children}) => {
    //setting up user
    const [user, setUser] = useState(null)

    //settign up loading
    const[loadingData, setLoadingData] =useState(true)
     //Sign in with google
     const googleSignIn = () => {
        return signInWithPopup(auth,providerGoogle)
     }

     //User sign in
     const userSignIn = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
     }
//user logout
const userLogOut = ()=>{
    setLoadingData(true)
     return signOut(auth)
   }

    //user create
    const userCreate = (email,password)=>{
        setLoadingData(true)
        return createUserWithEmailAndPassword(auth, email, password)
   }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth , currentUser => {
            setUser(currentUser)
            setLoadingData(false)

        })

        return () => {
            unSubscribe();
        }
    }, [])
   

    const authInformation = { user,userLogOut,userSignIn,userCreate,loadingData,googleSignIn }
    return (
        <div>
            <AuthenticationContext.Provider value={authInformation}>
                {children}
            </AuthenticationContext.Provider>
        </div>
    );
};

export default AthenticationProvider;