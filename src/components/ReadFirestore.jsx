import { useEffect, useState } from "react";
import { db } from "../config/firebase";
import { getDocs, collection } from "firebase/firestore"

function ReadFirestore(){
    const [movieList, setMovieList] = useState([]);
    const moviesCollectionRef = collection(db, "movies");

    useEffect(() => {        
        const getMovieList = async () => {
            try {
                const data = await getDocs(moviesCollectionRef);
                
                const filteredData = data.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id,
                }));
                setMovieList(filteredData);
            } catch(err) {
                console.error(err);
            }
        };

        getMovieList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return(
        <>
            <div>
                {movieList.map((movie) => (
                    <div key={movie.id}>
                        <h1 style={{color: movie.receivedOscar ? "green" : "red"}}>{movie.title}</h1>
                        <p>{movie.releaseDate}</p>
                    </div>
                ))}
            </div>
        </>
    );
}

export default ReadFirestore;