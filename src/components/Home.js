import React, { useEffect, useState } from "react";
import MovieList from './MovieList'


export default function Home() {

    const [movie, setMovie] = useState();
    async function getMovie() {
        let response = await fetch(`${process.env.REACT_APP_SERVER}/trending`)
        let dataMovie = await response.json();
        console.log(1, dataMovie);
        setMovie(dataMovie);
    }

    //=====way 2===========================================
    // const getMovie = async () => {
    //     try {
    //         const response = await fetch(`${process.env.REACT_APP_SERVER}/trending`)
    //         const dataMovie = await response.json();
    //         console.log(1, dataMovie);
    //         setMovie(dataMovie);
    //     } catch (error) {
    //         console.log("error", error);
    //     }

    // };

    useEffect(() => {
        getMovie();
    }, []);


    return (
        <div style={{display:"flex" }}>
            <h1> Home Page</h1>
            {
                movie && (< MovieList movies={movie} />)
            }

        </div>
    );
}