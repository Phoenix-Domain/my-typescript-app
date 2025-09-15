import Header from "../Headers/Header"

interface CardProp{
    title: string,
    bio: string,
    rating: number
}

function Card({ title, bio, rating }: CardProp){
    return(
        <section className="py-5 px-10 flex flex-col gap-4 bg-purple-600 text-white m-5 rounded-xl">
            <Header 
                level={2}
                children={`Name: ${title}`}
                style='text-center font-bold text-2xl'
            />

            <p>{bio}</p>

            <p className="font-semibold text-amber-400">Rating: {rating}</p>
        </section>
    )
}

export default Card;