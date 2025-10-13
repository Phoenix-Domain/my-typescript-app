import { useState, Dispatch, SetStateAction } from 'react';

interface Product{
    Product: string;
    Type: string;
}

interface FormProps{
    setProducts: Dispatch<SetStateAction<Product[]>>;
}

function Form({setProducts}: FormProps){
    const [productName, setProductName] = useState<string>('');

    const [productType, setProductType] = useState<string>('');

    const handleSubmit = (): void => {
        setProducts(prev => ([
            ...prev,
            {
                Product: productName,
                Type: productType
            }
        ]));

        setProductName('');
        setProductType('');
    }

    return(
        <form action="" className='rounded-xl bg-blue-200 flex flex-col gap-5 w-fit m-auto p-3' onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();           
        }}>
            <article className='*:block flex flex-col p-3'>
                <label htmlFor="">
                   Product Name:
                </label>
                <input 
                type="text"
                className='border'
                value={productName}
                onChange={(e) => {
                    setProductName(e.target.value)
                }}/>
            </article>

            <article className='*:block flex flex-col p-3'>
                <label htmlFor="">
                    Product Type:
                </label>
                <input
                    type="text" 
                    className='border'
                    value={productType}
                    onChange={(e) => {
                    setProductType(e.target.value)
                }} />
            </article>

            <button type='submit' className='px-4 py-2 bg-blue-600 text-white rounded-full'>
                Submit
            </button>
        </form>
    )
}

export default Form;