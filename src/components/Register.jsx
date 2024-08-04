import { useState } from "react";
import { auth } from "../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";


export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const signIn = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            setEmail("");
            setPassword("");
        } catch (err){
            console.error(err);
        }        
    };

    // ----------------------------------------------------------------------
    return (
        <>
            <div>
                <input 
                    placeholder="Email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}></input>
                <input 
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}></input>
                <button onClick={signIn}>Submit</button>
            </div>
        </>
    );
}