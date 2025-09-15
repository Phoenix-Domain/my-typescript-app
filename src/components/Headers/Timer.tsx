import { useState, useEffect } from 'react'

function Timer(){
    const [time, setTime] = useState<string>()

   const getCurrentTime = (): void => {
    const currentDate = new Date();

    setTime(`${String(currentDate.getHours()).padStart(2,'0')}:${String(currentDate.getMinutes()).padStart(2, '0')}:${String(currentDate.getSeconds()).padStart(2, '0')}`)
   }

   useEffect(() => {
    getCurrentTime(); //get current time first to reduce display delay
    const interval = setInterval(() => {
        getCurrentTime();
    }, 1000);

    return () => clearInterval(interval)
   }, [])


    return(
        <div className='font-bold text-5xl text-center my-5 border w-fit rounded-md p-10 mx-auto bg-[rgba(0,0,0,0.7)] text-white'>
            {time}
        </div>
    )
}

export default Timer
