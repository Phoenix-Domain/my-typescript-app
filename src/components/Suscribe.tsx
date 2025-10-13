interface SuscribeProps{
    handleSubscription: () => void
}

function Suscribe({handleSubscription}: SuscribeProps){
    return (
        <button onClick={() => {
            handleSubscription()
        }} className='bg-blue-600 text-white px-4 py-2 rounded-full mt-5'>
            Suscribe
        </button>
    )
}

export default Suscribe;