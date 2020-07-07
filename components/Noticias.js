import Noticia from "./Noticia";

const Noticias = (props) => {
    return (
        <div className="row">
            {
                props.noticias.map((noticia)=>(
                    <Noticia
                        noticia = {noticia}
                        key= {noticia.url}
                    />
                ))
            }
        </div>
    );
}
 
export default Noticias;