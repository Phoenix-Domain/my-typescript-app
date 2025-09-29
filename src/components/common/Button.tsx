interface ButtonTypes{
    label: string
    type: 'button' | 'submit' | 'reset'
}

function Button({ label, type }: ButtonTypes){
    return(
        <button type={type} className='bg-green-800 text-green-100 px-4 py-2 rounded-full active:bg-green-200 active:text-green-800'>
            {label}
        </button>
    )
}

export default Button;