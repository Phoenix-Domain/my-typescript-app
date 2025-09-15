import './App.css';
import Button from './components/Buttons/Button';
import { useState } from 'react';

function App() {
  const [number, setNumber] = useState<number>(0)

  const addNum = (): void => setNumber(prevVal => prevVal + 1);
  const subtractNum = (): void => setNumber(prevVal => prevVal - 1)
  const resetNum = (): void => setNumber(0);

   return (
    <>
      <p>Count is {number}</p>
      <Button 
        type='button'
        label='Add'
        style='bg-[rgba(0,0,0,0.9)] text-[rgb(255,245,238)] px-4 py-2 rounded-full mx-4 my-5'
        onClick={() => addNum()}
      />
       <Button 
        type='button'
        label='Subtract'
        style='bg-[rgba(0,0,0,0.9)] text-[rgb(255,245,238)] px-4 py-2 rounded-full mx-4 my-5'
        onClick={() => subtractNum()}
      />
       <Button 
        type='button'
        label='Reset'
        style='bg-[rgba(0,0,0,0.9)] text-[rgb(255,245,238)] px-4 py-2 rounded-full mx-4 my-5'
        onClick={() => resetNum()}
      />
    </>
  )
}

export default App
