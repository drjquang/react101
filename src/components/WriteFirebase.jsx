import { useState } from "react";
import { db } from "../config/firebase";
import { addDoc, collection } from "firebase/firestore"

export default function WriteFirebase(){
    const [movieTitle, setMovieTitle] = useState("");
    const [releaseDate, setReleaseDate] = useState(0);
    const [isOscar, setIsOscar] = useState(false)

    const moviesCollectionRef = collection(db, "movies");
    const onSubmitMovie = async () => {
        try {
            await addDoc(moviesCollectionRef, 
                {
                    title: movieTitle,
                    releaseDate: releaseDate,
                    receivedOscar: isOscar,
                })
            // Clear the input
            setIsOscar(false);
            setReleaseDate(0);
            setMovieTitle("");
        } catch(err){
            console.error(err);
        }
    };
    // ----------------------------------------------
    return(
        <>
            <input
                placeholder="Movie title ..."
                value={movieTitle}
                onChange={(e) => setMovieTitle(e.target.value)}>
                
            </input>
            <input
                placeholder="Release Date ..."
                type="number"
                value={releaseDate}
                onChange={(e) => setReleaseDate(e.target.value)}>
            </input>
            <input
                type="checkbox"
                value={isOscar}
                checked={isOscar}
                onChange={(e) => setIsOscar(e.target.checked)}>
            </input>
            <label>Received an Oscar</label>
            <button onClick={onSubmitMovie}>Submit movie</button>
        </>
    );

}