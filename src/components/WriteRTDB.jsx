import { useState } from "react";
import { rtdb } from "../config/firebase";
import { ref, set, push } from "firebase/database";

export default function WriteRTDB(){
    const [inputValue1, setInputvalue1] = useState("");
    const [inputValue2, setInputvalue2] = useState("");

    const newDocRef = push(ref(rtdb, "nature/fruits"));
    const saveData = async () => {
        set(newDocRef, {
            fruitName: inputValue1,
            fruitDesc: inputValue2,
        }).then(() => {
            console.log("Successfully push data to Realtime Database.")
            setInputvalue1("");
            setInputvalue2("");
        }).catch((err) => {
            console.error(err);
        });
    };
    return(
        <>
            <input
                placeholder="Enter value for input 1 ..."
                type="text"
                value={inputValue1}
                onChange={(e) => setInputvalue1(e.target.value)}
            ></input>
            <br />
            <input
                placeholder="Enter value for input 2 ..."
                type="text"
                value={inputValue2}
                onChange={(e) => setInputvalue2(e.target.value)}
            ></input>
            <br />
            <button onClick={saveData}>Save Data to RTDB</button>
        </>
    );
}