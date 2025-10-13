import './App.css';
import Products from './components/Products';
import Form from './components/Form';
import { useState } from 'react';
interface Product{
    id: number;
    Product: string;
    Type: string;
}

function App() {
    const [products, setProducts] = useState<Product[]>([]);

 return(
    <>
        <h1 className='text-3xl'>
            Total Products: <span className='text-blue-700 font-bold'>{products.length}</span>
        </h1>
       <Form setProducts={setProducts}/>
       {
        products && (products.map((product, key) => <Products key={key} product={product.Product} type={product.Type} id={product.id} setProducts={setProducts}/>))
       }
    </>
 )
}

export default App
