import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2'
export default function FavList(props) {


  async function handleDelete(id) {
    const response = await fetch(`${process.env.REACT_APP_SERVER}/deleteInfMovie/${id}`, {
      method: "DELETE",
    })
    if (response.status == 204) {
      Swal.fire(
        'It is DONE!',
        'Movie Deleted successfully!',
        'success'
      )
    }
  }

  return (
    <>

      <h1 style={{margin:"50px"}}>  Favorites Movies  </h1>
      <hr></hr>
      <div  style={{display: "flex",flexWrap: "wrap"}}>
    
        {
          props.favListData && props.favListData.map(movie => {
            return (<>

              < Card style={{ width: '18rem',height: "600px", overFlowX: "auto", marginLeft: "50px", flexWrap: "wrap" }}>
                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                <Card.Body>
                  <Card.Title> {movie.title} </Card.Title>
                  {/* <Card.Text> {movie.overview} </Card.Text> */}
                  <Card.Text>
                    {movie.comment ? movie.comment : "No Comment is Added ."}
                  </Card.Text>
                  <Button variant="primary" onClick={() => { handleDelete(movie.id) }} >Delete </Button>
                </Card.Body>

              </Card>

            

          </>

      )

        })
      }
      </div>
    </>
  );
}