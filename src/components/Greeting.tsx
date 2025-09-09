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

            <div>
                <button>
                    Add 1
                </button>
                <button>
                    Add 2
                </button>
                <button>
                    Add 3
                </button>
            </div>
        </>
    )
}

export default Greeting;