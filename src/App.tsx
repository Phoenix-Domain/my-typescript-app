import './App.css';
import Products from './components/Products';
import Form from './components/Form';
import { useState } from 'react';
interface Product{
    Product: string;
    Type: string;
}

function App() {
    const [products, setProducts] = useState<Product[]>([]);
    
 return(
    <>
       <Form setProducts={setProducts}/>
       {
        products && (products.map((product, key) => <Products key={key} product={product.Product} type={product.Type}/>))
       }
    </>
 )
}

export default App
