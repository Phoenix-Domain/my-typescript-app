import './App.css';
import Navbar from './components/Navbar';
import { useContext } from 'react';
import { ThemeContext } from './components/context/ThemeContext/ThemeContext';

function App() {
    const {theme, setTheme} = useContext(ThemeContext);

       
 return(
  <div className={`w-[100dvw] h-[100dvh] ${theme === 'dark' ? 'bg-gray-900 text-white' : ''}`}>
    <Navbar />
  </div>
 )
}

export default App
