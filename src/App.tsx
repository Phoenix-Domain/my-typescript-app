import './App.css';
import Button from './components/Buttons/Button';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState<number>(0);

  const addCount = (): void => setCount(prevValue => prevValue + 1);
  const subtractCount = (): void => setCount(prevValue => prevValue - 1);
  const resetCount = (): void => setCount(0);
  const invertCount = (): void => setCount(prevValue => prevValue * -1);

  return(
    <>
      <p className='my-4 flex gap-2 items-center'>The Count is {count}</p>
      
      <Button 
        label='Add'
        type='button'
        style='bg-purple-700 mx-4 px-4 py-2 rounded-full text-white'
        onClick={addCount}
      />

      <Button 
        label='Subtract'
        type='button'
        style='bg-purple-700 mx-4 px-4 py-2 rounded-full text-white'
        onClick={subtractCount}
      />

      <Button 
        label='Reset'
        type='button'
        style='bg-purple-700 mx-4 px-4 py-2 rounded-full text-white'
        onClick={resetCount}
      />

      <Button 
        label='Invert'
        type='button'
        style='bg-purple-700 mx-4 px-4 py-2 rounded-full text-white'
        onClick={invertCount}
      />
    </>
  )
}

export default App
