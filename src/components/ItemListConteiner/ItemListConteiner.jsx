import './ItemListConteiner.css'



function ItemListConteiner ({NombreProducto, stock}){

    return (
        <h2>
            Nombre del Artículo: {NombreProducto}<br></br>
            Cantidad en Stock: {stock} unidades
        </h2>
    );

}


export default ItemListConteiner
