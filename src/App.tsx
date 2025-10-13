import './App.css';
import Card from './components/Card';

function App() {
 return(
<div className='flex flex-col gap-5'>
    <Card 
        title='Batubo Victory'
        role='Frontend Developer'
        quote='I turn pixels into experiences that people love.'
    />

    <Card 
        title='Ada Christopher'
        role='UX Designer'
        quote='Design isn’t just how it looks — it’s how it works.'
    />

    <Card 
        title='John Smith'
        role='Project Manager'
        quote='Clear goals, strong teams, and no surprises — that’s my mantra.'
    />
</div>
 )
}

export default App
