import { useState } from "react";

interface GreetingProps{
    name: string
}

function Greeting({name}: GreetingProps){
    const [count, setCount] = useState<number>(0)
    return (
        <>
            <p>Hello {name}</p>
            <p> your count is {count}.</p>

            <div className="my-4 flex gap-5">
                <button className="bg-blue-600 px-4 py-2 rounded-full text-white active:bg-purple-700" onClick={() => {
                    setCount(prevVal => prevVal + 1)
                }}>
                    Add 1
                </button>
                <button className="bg-blue-600 px-4 py-2 rounded-full text-white active:bg-purple-700" onClick={() => {
                    setCount(prevVal => prevVal - 1)
                }}>
                    Add 2
                </button>
                <button className="bg-blue-600 px-4 py-2 rounded-full text-white active:bg-purple-700" onClick={() => {
                    setCount(0)
                }}>
                    Add 3
                </button>
            </div>
        </>
    )
}

export default Greeting;