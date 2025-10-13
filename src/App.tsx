import './App.css';
import Suscribe from './components/Suscribe';
import Display from './components/Display';
import { useState } from 'react';

function App() {
    const [isSuscribed, setIsSuscribed] = useState<boolean>(false);

    const handleSubscription = (): void => {
        return isSuscribed ? setIsSuscribed(false) : setIsSuscribed(true)
    }

 return(
    <>
        <Display isSuscribed={isSuscribed}/>
        <Suscribe handleSubscription={handleSubscription}/>
    </>
 )
}

export default App
