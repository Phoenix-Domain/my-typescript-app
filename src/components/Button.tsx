interface buttonType{
    content: string,
    style: string,
    type: 'button' | 'submit' | 'reset'
}

function button({ style, content, type }: buttonType){
    return(
        <button type={type} className={style}>
            {content}
        </button>
    )
}

export default button;