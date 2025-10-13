import Button from './Button';

interface ButtonProps{
    title: string;
    quote: string;
    role: string;
}

function Card({title, quote, role}: ButtonProps){
    return(
        <section className='flex flex-col bg-blue-200 items-center gap-5 max-w-[50%] p-5 m-auto rounded-2xl'>
            <h1 className='text-3xl font-bold'>
                {title}
            </h1>

            <p className='text-xl font-semibold'>
                {role}
            </p>

            <p className='italic'>
                {`"${quote}"`}
            </p>

            <article className='flex gap-10'>
                <Button 
                    type='button'
                    label='Hire Me'
                />

                <Button 
                    type='button'
                    label='View My Resume'
                />
            </article>
        </section>
    )
}

export default Card;