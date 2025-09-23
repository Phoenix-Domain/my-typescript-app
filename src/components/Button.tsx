interface ButtonProps {
    type: 'button' | 'submit' | 'reset',
    content: string
    onClick: () => void
}

function Button({ type, content, onClick }: ButtonProps){
    return (
        <button type={type} className='bg-white text-purple-900 rounded-full px-4 py-2 font-semibold' onClick={onClick}>
            {content}
        </button>
    )
}

export default Button;