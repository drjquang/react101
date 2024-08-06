import { useEffect, useState } from "react";
import { rtdb } from "../config/firebase";
import { ref, get, remove } from "firebase/database";
import { useNavigate } from 'react-router-dom';

const decodeFirebaseKey = (key) => {
    const PUSH_CHARS = "-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz";

    let timestamp = 0;

    for (let i = 0; i < 8; i++) {
        timestamp = timestamp * 64 + PUSH_CHARS.indexOf(key.charAt(i));
    }

    return timestamp;
}

const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    return `${year}:${month}:${day}:${hours}:${minutes}:${seconds}`;
}

export default function UpdateRTDB() {
  const navigate = useNavigate();
  const [fruits, setFruits] = useState([]);

  const dbRef = ref(rtdb, "nature/fruits");
  const fetchData = async () => {
    const snapshot = await get(dbRef);
    if (snapshot.exists()) {
      const myData = snapshot.val();
      const tempArray = Object.keys(myData).map((myFireId) => {
        return{
          ...myData[myFireId],
          fruitId: myFireId
        }
      });
      setFruits(tempArray);
    } else {
      console.log("There is no realtime database existing.");
    }
  };

  const deleteFruit = async (fruidId) => {
    const dbRef = ref(rtdb, "nature/fruits" + "/" + fruidId);
    await remove(dbRef);
  };

  // do once fetchData at the beginning
  useEffect(() => {
    fetchData();
  }    
  ), [];

  return (
    <>
      <button onClick={fetchData}>Fetch Data</button>
      
      {fruits.map((item, index) => (
        <div key={index}>
          <h1>{item.fruitName}</h1>
          <p>{item.fruitDesc}</p>
          <p>{item.fruitId}</p>
          <p>Timestamp: {formatTimestamp(decodeFirebaseKey(item.fruitId))}</p>
          <button onClick={ () => navigate(`/updatewrite/${item.fruitId}`)}>Update</button>
          <button onClick={ () => deleteFruit(item.fruitId)}>Delete</button>
          <hr />
        </div>
      ))}
    </>
  );
}
