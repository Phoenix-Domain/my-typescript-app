import Button from './Button'
import { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext/ThemeContext';


function Navbar(){
    const themeContext = useContext(ThemeContext);
    const theme = themeContext?.theme ?? 'light';
    const setTheme = themeContext?.setTheme ?? (() => {});

    const toggleBtn = (): void => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }
   
    return(
        <>
            <nav className={`flex justify-around ${ theme === 'light' ? 'bg-purple-900 text-white' : 'bg-white text-purple-900'} rounded-full m-5 p-4 items-center`}>
            <h1 className='font-bold text-2xl'>ContextTutorial</h1>
            <ul className='flex justify-around gap-8 items-center'>
                <li>Home</li>
                <li>About</li>
                <li>Portfolio</li>
            </ul>
            
            <Button 
                type='button'
                content='Click Me'
                onClick={toggleBtn}
            />
        </nav>
        <p>
            The theme is {theme}
        </p>
        </>
    )
}

export default Navbar;