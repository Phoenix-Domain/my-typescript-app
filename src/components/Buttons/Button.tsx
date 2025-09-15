interface ButtonProps{
    label: string,
    style: string,
    type: 'submit' | 'button' | 'reset',
    size?: 'sm' | 'md' | 'lg',
    onClick?: () => void
}

function Button({label, style, type, onClick}: ButtonProps){
    return(
        <button type={type} className={style} onClick={onClick}>
            {label}
        </button>
    )
}

export default Button;