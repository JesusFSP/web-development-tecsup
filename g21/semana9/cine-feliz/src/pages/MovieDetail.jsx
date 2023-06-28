import { useParams } from "react-router-dom";

const MovieDetail = () => {
    const params = useParams();
    console.log(params);
    return ( 
        <h1>Detalle de pelicula</h1>
     );
}
 
export default MovieDetail;