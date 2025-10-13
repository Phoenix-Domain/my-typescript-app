interface DisplayProps{
    isSuscribed: boolean;
}

function Display({ isSuscribed }: DisplayProps){
    let userState: string;
    let userStyle: string;

    if (isSuscribed){
        userState = 'Is Suscribed';
        userStyle = 'bg-green-600';
    }else{
        userState = 'Is Not Suscribed';
        userStyle = 'bg-red-600';
    }

    return(
        <>
            <p className={`${userStyle} px-4 py-2 w-fit text-white rounded-full`}>
                {`User ${userState}`}
            </p>
        </>
    )
}

export default Display;