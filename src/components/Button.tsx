interface ButtonProps{
    label: string;
    type: 'button' | 'submit' | 'reset';
}

function Button({label, type}: ButtonProps){
    return(
        <button type={type} className='px-4 py-2 bg-blue-600 text-white rounded-full'>
            {label}
        </button>
    )
}

export default Button