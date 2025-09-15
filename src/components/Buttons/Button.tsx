interface ButtonProp{
    type: 'button' | 'submit' | 'reset',
    label: string,
    style: string,
    onClick?: () => void
}

function Button({type, label, style, onClick}: ButtonProp){
    return (
        <button type={type} className={style} onClick={onClick}>
            {label}
        </button>
    )
}

export default Button;