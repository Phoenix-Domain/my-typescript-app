import { useState } from 'react';

function Counter(){
  const [count, setCount] = useState<number>(0)
  return(
    <>
      <p className='text-2xl font-bold'>Count: {count}</p>

      <div className='flex w-fit gap-5 my-3'>
        <button type='button' className='bg-[rgb(53,51,51)] text-white px-4 py-2 rounded-full' onClick={() => {
          setCount(prevVal => prevVal + 1)
        }}>
          Increment
        </button>

        <button type='button' className='bg-[rgb(53,51,51)] text-white px-4 py-2 rounded-full' onClick={() => {
          setCount(prevVal => prevVal - 1)
        }}>
          Decrement
        </button>

        <button type='button' className='bg-[rgb(53,51,51)] text-white px-4 py-2 rounded-full' onClick={() => {
          setCount(0)
        }}>
          Reset
        </button>
      </div>
    </>
  )
}

export default Counter;