import { useEffect, useState } from "react";
import { rtdb } from "../config/firebase";
import { ref, set, get } from "firebase/database";
import { useNavigate, useParams } from 'react-router-dom';


export default function UpdateWrite(){
    const navigate = useNavigate();
    const { firebaseId } = useParams();

    const [inputValue1, setInputvalue1] = useState("");
    const [inputValue2, setInputvalue2] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            const dbRef = ref(rtdb, "nature/fruits" + "/" + firebaseId);
            const snapshot = await get(dbRef);        
            if (snapshot.exists()) {
                const targetObject = snapshot.val();
                setInputvalue1(targetObject.fruitName);
                setInputvalue2(targetObject.fruitDesc);
            } else {
                console.log("There is no realtime database existing.");
            }
        };
        fetchData();
        
    }, [firebaseId]);

    const newDocRef = ref(rtdb, "nature/fruits" + "/" + firebaseId);
    const overwriteData = async () => {
        set(newDocRef, {
            fruitName: inputValue1,
            fruitDesc: inputValue2,
        }).then(() => {
            console.log("Successfully update data to Realtime Database.")
            setInputvalue1("");
            setInputvalue2("");
            navigate('/updateRTDB');
        }).catch((err) => {
            console.error(err);
        });
    };
    return(
        <>
            <h1>UPDATING FOR ITEM ID</h1>
            <input
                placeholder={inputValue1}
                type="text"
                value={inputValue1}
                onChange={(e) => setInputvalue1(e.target.value)}
            ></input>
            <br />
            <input
                placeholder={inputValue2}
                type="text"
                value={inputValue2}
                onChange={(e) => setInputvalue2(e.target.value)}
            ></input>
            <br />
            <button onClick={overwriteData}>Overwrite Data to RTDB</button>
        </>
    );
}