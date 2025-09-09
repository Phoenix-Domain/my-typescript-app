import { useState } from "react";

interface formData{
    name: string,
    phone: number | null,
    msg: string
}

function Form(){
    const [name, setName] = useState<string>('');
    const [phone, setPhone] = useState<number | null>(null);
    const [msg, setMsg] = useState<string>('');
    const [submittedData, setSubmittedData] = useState<formData | null>(null)

    return(
        <>
            <form action="" className="flex flex-col w-fit p-2" onSubmit={e => {
                e.preventDefault();
                setSubmittedData({name, phone, msg});
                setName('');
                setPhone(0);
                setMsg('');
            }}>
                <label htmlFor="name">Name:</label>
                <input id='name' type="text" value={name} className="outline-0 p-1 bg-gray-300 mb-4 mt-2" onChange={(e) => {
                    setName(e.target.value);
                }}/>

                <label htmlFor="phone">phone:</label>
                <input id='phone' value={phone ?? ''} type="text" className="outline-0 p-1 bg-gray-300 mb-4 mt-2" onChange={(e) => {
                    setPhone(Number(e.target.value))
                }}/>

                <label htmlFor="message">Message:</label>
                <input id='message' value={msg} type="text" className="outline-0 p-1 bg-gray-300 mb-4 mt-2" onChange={(e) => {
                    setMsg(e.target.value)
                }}/>

                <button type='submit' className="bg-blue-700 px-4 py-2 w-fit text-white active:bg-purple-700">
                    Submit
                </button>
            </form>

            {
                    submittedData && (
                        <div id="result">
                            <p>Name: {submittedData.name}</p>
                            <p>phone: {submittedData.phone}</p>
                            <p>Message: {submittedData.msg}</p>
                        </div>
                    )
                }
            
        </>
    )
}

export default Form;