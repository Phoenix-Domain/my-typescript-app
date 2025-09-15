interface ButtonProp{
    type: 'button' | 'submit' | 'reset',
    label: string,
    style: string
}

function Button({type, label, style}: ButtonProp){
    return (
        <button type={type} className={style}>
            {label}
        </button>
    )
}

export default Button;