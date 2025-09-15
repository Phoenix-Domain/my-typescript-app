import './App.css';
import Button from './components/Buttons/Button';

function App() {
   return (
    <>
      <Button 
        type='button'
        label='Click me'
        style='bg-[rgba(0,0,0,0.9)] text-[rgb(255,245,238)] px-4 py-2 rounded-full m-auto my-5'
      />
    </>
  )
}

export default App
