import { useEffect, useState } from "react";
import { rtdb } from "../config/firebase";
import { ref, get } from "firebase/database";

export default function ReadRTDB(){
    const [fruits, setFruits] = useState([]);

    const dbRef = ref(rtdb, "nature/fruits");
    const fetchData = async () => {
        const snapshot = await get(dbRef);        
        if (snapshot.exists()) {
            setFruits(Object.values(snapshot.val()));
        } else {
            console.log("There is no realtime database existing.");
        }
    };
    
    return(
        <>
            <button onClick={fetchData}>Fetch Data</button>
            {fruits.map((item, index) => (
                <div key={index}>
                    <h1>{item.fruitName}</h1>
                    <p>{item.fruitDesc}</p>
                    <hr />
                </div>
            ))}
        </>
    );
}