import Movie from '../Movie/Movie'

export default function MovieList(props) {

    //     const MoviesContainer = styled.div`
    //     display: flex;
    //     justify-content: center;
    //     flex-wrap: wrap;
    //     width: 100%;
    //   `;



    console.log(2, props.movies);
    return (
        < >
            <h2 >Movie List.</h2>
            
            <div style={{
                display: "flex",
                flexWrap: "wrap"
            }}>
                {
                    props.movies.map(object => {
                        // console.log(3, object);
                        return (
                            <div className='MoviesContainer' >
                                <Movie key={object.id} movieCard={object} />

                            </div>
                        )

                    })
                }
            </div>


        </>
    );

}
