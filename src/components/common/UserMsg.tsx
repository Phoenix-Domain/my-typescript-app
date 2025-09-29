interface UserMsgTypes{
    content: string;
}

function UserMsg({content}: UserMsgTypes){
    return(
        <article>
            <p>
                {content}
            </p>
        </article>
    )
}

export default UserMsg;