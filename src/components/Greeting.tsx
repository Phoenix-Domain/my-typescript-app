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
        </>
    )
}

export default Greeting;