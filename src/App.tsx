import './App.css';
import Header from './components/Headers/Header';
import Timer from './components/Headers/Timer';

function App() {
  
  return (
    <>
      <Header 
        level={1}
        children='Timer App'
        style='text-3xl font-semibold text-center'
      />

      <div>
        <Timer />
      </div>
    </>
  )
}

export default App
