interface ProductProps{
    product: string;
    type: string
}

function Products({product,type}: ProductProps){
    return(
        <article>
            <p>{product}</p>
            <p>{type}</p>
        </article>
    )
}

export default Products;