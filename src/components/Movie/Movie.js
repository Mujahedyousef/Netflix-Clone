import ModalMovie from '../ModalMovie/ModalMovie';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import { useState } from 'react';


export default function Movie(props) {
  
    const [show, setShow] = useState(false);
    const [chosenMovie, setChosenMovie] = useState();
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // console.log(4, props.movieCard);
    function handleShowModel(movieCard) {
        console.log(5, movieCard);
        handleShow();
        setChosenMovie(movieCard);
    }





    return (
        <>
            <div >

                < Card style={{ width: '18rem',  height: "600px",overFlowX : "auto", margin: "30px" }}>
                    <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${props.movieCard.poster_path}`} alt={props.movieCard.title} />
                    <Card.Body>
                        <Card.Title> {props.movieCard.title} </Card.Title>
                        {/* <Card.Text> {props.movieCard.overview} </Card.Text> */}
                        <Card.Text>
                            {props.movieCard.comment ? props.movieCard.comment : "No Comment is Added ."}
                        </Card.Text>
                        <Button variant="primary" onClick={() => { handleShowModel(props.movieCard) }}>Show Modal</Button>
                    </Card.Body>

                </Card>
                {
                    chosenMovie && < ModalMovie show={show} handleClose={handleClose} chosenMovie=
                        {chosenMovie} updateMovie={props.updateMovie}  />
                }





            </div>
        </>
    )

}
