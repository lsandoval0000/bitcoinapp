import Libro from "./Libro";

const  Libros= (props) => {
    return ( 
        <div className="list-group">
            {
                props.libros.map( libro =>(
                    <Libro
                        libro = {libro}
                        key = {libro.id}
                    />
                ))
            }
        </div>
    );
}
 
export default Libros;