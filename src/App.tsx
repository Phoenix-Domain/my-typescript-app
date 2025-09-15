import './App.css';
import Button from './components/Buttons/Button';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState<number>(0);

  //Count functions
  const addCount = (): void => setCount(prevVal => prevVal + 1);
  const subtractCount = (): void => setCount(prevVal => prevVal - 1);
  const resetCount = (): void => setCount(0);

  return(
    <>

      <p>Count is <span className='font-bold text-blue-800 text-xl'>{count}</span></p>

      <Button 
        type='button'
        label='Add'
        style='bg-[rgba(200,120,124,0.4)] px-4 py-2 mx-4 rounded-full font-bold'
        onClick={addCount}
      />

      <Button 
        type='button'
        label='Subtract'
        style='bg-[rgba(200,120,124,0.4)] px-4 py-2 mx-4 rounded-full font-bold'
        onClick={subtractCount}
      />

      <Button 
        type='button'
        label='Reset'
        style='bg-[rgba(200,120,124,0.4)] px-4 py-2 mx-4 rounded-full font-bold'
        onClick={resetCount}
      />
    </>
  )
}

export default App
