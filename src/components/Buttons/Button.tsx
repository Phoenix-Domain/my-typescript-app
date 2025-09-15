interface ButtonProps{
    label: string,
    style: string,
    type: 'submit' | 'button' | 'reset'
}

function Button({label, style, type}: ButtonProps){
    return(
        <button type={type} className={style}>
            {label}
        </button>
    )
}

export default Button;