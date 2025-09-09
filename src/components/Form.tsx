import { useState } from "react";

function Form(){
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('')
    const [msg, setMsg] = useState<string>('');

    return(
        <>
            <form action="" className="flex flex-col w-fit p-2">
                <label htmlFor="name">Name:</label>
                <input id='name' type="text" className="outline-0 p-1 bg-gray-300 mb-4 mt-2" />

                <label htmlFor="email">Email:</label>
                <input id='email' type="text" className="outline-0 p-1 bg-gray-300 mb-4 mt-2" />

                <label htmlFor="message">Message:</label>
                <input id='message' type="text" className="outline-0 p-1 bg-gray-300 mb-4 mt-2" />

                <button type='submit' className="bg-blue-700 px-4 py-2 w-fit text-white active:bg-purple-700">
                    Submit
                </button>
            </form>

            {
                    name && email && msg && (
                        <div id="result">
                            <p>Name: {name}</p>
                            <p>Email: {email}</p>
                            <p>Message: {msg}</p>
                        </div>
                    )
                }

            
        </>
    )
}

export default Form;