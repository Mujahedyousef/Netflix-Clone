import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import MovieList from '../MovieList/MovieList'
import movieData from '../data/data.json'
import Movie from "../Movie/Movie";

export default function Home() {

    const [movie, setMovie] = useState(movieData);
    // async function getMovie() {
    //     let response = await fetch(`${process.env.REACT_APP_SERVER}/trending`)
    //     let dataMovie = await response.json();
    //     console.log(1, dataMovie);
    //     setMovie(dataMovie);
    // }

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

    // useEffect(() => {
    //     getMovie();
    // }, []);
    function updateMovie(newMovie, id) {
        let updatesMovie = movie.map(movies => {
            if (movies.id == id) {
                movies.comment = newMovie.comment;
                return movies;
            } else {
                return movies;
            }
        })
        setMovie(updatesMovie)
    }



    return (
        <div >
            <Container  fluid className="main-container">

                <Row className=" flex-row" style={{margin:"50px"}}>
                    <h1> Home Page </h1>
                    <br/>
                    <br/>
                    <br/>
                    <hr></hr>
                    {
                        movie && (< MovieList movies={movie} updateMovie={updateMovie} />)

                    }
                </Row>
            </Container>
        </div>
    );
}