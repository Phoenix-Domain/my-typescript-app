import Button from './Button'

function Navbar(){
    return(
        <nav className='flex justify-around bg-purple-900 text-white rounded-full m-5 p-4 items-center'>
            <h1 className='font-bold text-2xl'>ContextTutorial</h1>
            <ul className='flex justify-around gap-8 items-center'>
                <li>Home</li>
                <li>About</li>
                <li>Portfolio</li>
            </ul>
            <Button 
                type='button'
                content='Click Me'
            />
        </nav>
    )
}

export default Navbar;