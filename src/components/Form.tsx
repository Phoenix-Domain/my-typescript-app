function Form(){
    return(
        <>
            <form action="" className="flex flex-col w-fit p-2">
                <label htmlFor="">Name:</label>
                <input type="text" className="outline-0 p-1 bg-gray-300 mb-4 mt-2" />

                <label htmlFor="">Email:</label>
                <input type="text" className="outline-0 p-1 bg-gray-300 mb-4 mt-2" />

                <label htmlFor="">Message:</label>
                <input type="text" className="outline-0 p-1 bg-gray-300 mb-4 mt-2" />
            </form>
        </>
    )
}

export default Form;