import { Dispatch, SetStateAction } from 'react';

interface Product{
    id: number;
    Product: string;
    Type: string;
}
interface ProductProps{
    id: number;
    product: string;
    type: string;
    setProducts: Dispatch<SetStateAction<Product[]>>;
}

function Products({id,product,type,setProducts}: ProductProps){
    return(
        <article className='bg-gray-300 flex justify-around my-2 w-[60%] rounded-full m-auto py-2'>
            <p className='bg-pink-300 px-4 py-2 rounded-full'>
                {product}
            </p>

            <p className='bg-green-300 px-4 py-2 rounded-full'>
                {type}
            </p>

            <button className='bg-red-500 px-4 py-2 rounded-full text-white' onClick={() => {
                setProducts(prev => prev.filter(product => product.id !== id))                               
            }}>
                Delete
            </button>
        </article>
    )
}

export default Products;