import MasterPage from '../components/Master';
import fetch from 'isomorphic-unfetch';
import Precio from '../components/Precio';
import Noticias from '../components/Noticias';
import Libros from '../components/Libros';

const Index = (props)=>(
    <MasterPage>
        <div className="row">
            <div className="col-12">
                <h2>Precio del Bitcoin</h2>
                <Precio
                    precio = {props.precioBitcoin}
                />
            </div>
            <div className="col-md-8">
                <h2 className="my-4">Noticias Bitcoin</h2>
                <Noticias
                    noticias = {props.noticias}
                />
            </div>
            <div className="col-md-4">
                <h2 className="my-4">Libros sobre Bitcoin</h2>
                <Libros
                    libros = {props.libros}
                />
            </div>
        </div>
    </MasterPage>
);

export const getServerSideProps = async () => {
    const precio = await fetch('https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?id=1&CMC_PRO_API_KEY=522e1aae-fd5c-425a-946f-f52c79772244');
    const noticias = await fetch('http://newsapi.org/v2/everything?q=bitcoin&language=es&sortBy=publishedAt&apiKey=7f08cc2bce924489937f81978fec1310');
    const libros = await fetch('https://www.googleapis.com/books/v1/volumes?q=bitcoin&key=AIzaSyBIndELXce3gTwDHbktnRAw_t2ITcFAPxs_jKjdHDLFnf8');

    const resPrecio = await precio.json();
    const resNoticias = await noticias.json();
    const resLibros = await libros.json();

    return {
        props : {
            precioBitcoin : resPrecio.data[1].quote.USD,
            noticias: resNoticias.articles,
            libros : resLibros.items
        }
    }
}

export default Index;