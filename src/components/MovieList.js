import Movie from './Movie'

export default function MovieList(props) {
    console.log(2, props.movies);
    return (
        <>
            <h2>Movie List.</h2>

            {
                props.movies.map(object => {
                    // console.log(3, object);
                    return (
                        <div >
                            <Movie key={object.id} movieCard={object} />
                        </div>
                    )

                })
            }



        </>
    );
}
