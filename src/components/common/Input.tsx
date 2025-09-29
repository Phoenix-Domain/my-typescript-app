interface InputTypes{
    type: string
}

function Input({type}: InputTypes){
    return(
        <input 
        type={type} 
        className='border-2 rounded-full p-2 border-green-800 w-full flex-2 focus:border-green-500 outline-0'
        placeholder='Send a message to Chatbot'
        />
    )
}

export default Input