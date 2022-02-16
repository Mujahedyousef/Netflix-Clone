import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'

import { useRef, useState } from 'react';
import { nativeTouchData } from 'react-dom/cjs/react-dom-test-utils.production.min';

export default function ModalMovie(props) {
    // console.log(6, props);
    
    const [userComment, setUserComment] = useState()
    const commentRef = useRef()
    function handleComment(e) {
        e.preventDefault();
        console.log(7, commentRef.current.value);
        const comment = commentRef.current.value;
        setUserComment(comment)
        const newMovie = { ...props.chosenMovie, comment }
        console.log(8, newMovie);
        props.updateMovie(newMovie, props.chosenMovie.id)
        console.log(9, props.chosenMovie.id);
    }


    async function handleAddFav(movie) {
        // e.preventDefault();
        const dataToBeSent = {
            title: movie.title,
            release_date: movie.release_date,
            poster_path: movie.poster_path,
            overview: movie.overview
        }
        const url = `${process.env.REACT_APP_SERVER}/addMovie`
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataToBeSent)
        })
        const data = await response.json();
        console.log(response.status)
        console.log(data)
    }





    return (
        <>
            <Modal show={props.show} onHide={props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.chosenMovie.title}</Modal.Title>

                </Modal.Header>
                <Modal.Body>
                    <img width="100%" src={`https://image.tmdb.org/t/p/w500${props.chosenMovie.poster_path}`} alt={props.chosenMovie.title} />
                    <p>  {props.chosenMovie.overview.substring(0, 500)}</p>
                    <p> User comment : {userComment ? userComment : "No comment is Added"}</p>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Comment</Form.Label>
                            <Form.Control ref={commentRef} type="text" placeholder="Enter you comment ." />
                            <Form.Text className="text-muted">

                            </Form.Text>

                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={handleComment} >
                            Submit
                        </Button>
                        <Button variant="primary" onClick={() => { handleAddFav(props.chosenMovie) }} >
                            Add to Favorites
                        </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={props.handleClose} >
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}



