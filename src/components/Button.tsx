interface ButtonProps {
    type: 'button' | 'submit' | 'reset',
    content: string
}

function Button({ type, content }: ButtonProps){
    return (
        <button type={type} className='bg-white text-purple-900 rounded-full px-4 py-2 font-semibold'>
            {content}
        </button>
    )
}

export default Button;