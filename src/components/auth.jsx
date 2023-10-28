import { useState } from 'react';
import {auth} from '../config/firebase';
import {createUserWithEmailAndPassword, signOut} from 'firebase/auth';

export const Auth = () =>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loggedin, setLoggedin] = useState("False");
    console.log(auth?.currentUser?.email);
    const signIn = async () =>{
        try{
            await createUserWithEmailAndPassword(auth, email, password);
        }catch(err){
            console.error();
        }
    };
    const logout = async () =>{
        try{
            await signOut(auth);
        }catch(err){
            console.error();
        }
    };
    return(
        <div className='flex flex-col'>
            {loggedin === "False" ? 
            <li className='w-64 h-8 flex  m-auto p-auto 
            rounded-full bg-gray-200 divide-x-2 divide-gray-700'>
                <input placeholder="email" 
                onChange = {(e) => setEmail(e.target.value)}
                className='w-full rounded-l-full bg-transparent
                 text-gray-900 outline-none pl-4 
                    appearance-none text-sm font-mono' />
                <input placeholder="password"
                type="password"
                onChange = {(e) => setPassword(e.target.value)}
                className='w-full bg-transparent
                 text-gray-900 outline-none pl-2 pr-2
                    appearance-none text-sm font-mono'/>
                <button onClick = {()=>{
                    signIn;
                    setLoggedin("True");
                }} 
                className=' rounded-r-full text-gray-200 w-64
                 bg-gray-700
                text-sm font-mono'>sign in</button>
            </li>
            :
            <li>
                <button className='mt-2 rounded-full text-gray-200 w-36 h-8
                 bg-gray-700 m-auto
                text-sm font-mono'
                onClick = {()=>{
                    logout;
                    setLoggedin("False");
                }}>sign out</button>
            </li>
            }
        </div>
    )
}