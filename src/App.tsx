import './App.css';
import { useState } from 'react';
import useLocalStorage from './hooks/useLocalStorage';

function App() {
       const [name, setName] = useState('')
 return(
 <>
    <input type="text" value={name} onChange={(e) => setName(e.target.value)} className='border bg-gray-700 text-white m-5 p-1'/>

    <p>{name}</p>
 </>
 )
}

export default App
