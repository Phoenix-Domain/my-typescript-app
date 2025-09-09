import { useState } from "react";

interface GreetingProps{
    name: string
}

function Greeting({name}: GreetingProps){
    return (
        <>
            <p>{name}</p>
        </>
    )
}

export default Greeting;