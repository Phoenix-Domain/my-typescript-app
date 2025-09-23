import { ReactNode, useState } from 'react';
import { Theme, ThemeContext } from './ThemeContext'

function ThemeProvider({children}: {children: ReactNode}){
    const [theme, setTheme] = useState<Theme>('light');
    
    return(
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;