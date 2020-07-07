const Libro = (props) => {
    const {volumeInfo} = props.libro;
    let texto = volumeInfo.subtitle;
    let titulo = volumeInfo.title;

    if(titulo && titulo.length > 150){
        titulo = titulo.substr(0,150) + '...';
    }

    if(texto && texto.length > 250){
        texto = texto.substr(0,250) + '...';
    }

    return (
        <a href={volumeInfo.infoLink} target="_blank" className="list-group-item active text-light mb-1">
            <h3 className="mb-3">{titulo}</h3>
            <p className="mb-1">{texto}</p>
        </a>
    );
}
 
export default Libro;