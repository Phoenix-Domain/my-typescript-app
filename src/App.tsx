import './App.css';
import Header from './components/Headers/Header';
import Card from './components/Cards/Card';

function App() {
  return (
    <>
      <Header 
        level={1}
        children='Welcome Victory'
        style='text-3xl font-bold'
      />

      <Card 
        title='Zara Okoye'
        bio='A Lagos-based creative technologist with a passion for blending code, culture, and community. Zara thrives at the intersection of design and development, building intuitive digital experiences that speak to real human needs. When not crafting interfaces or mentoring young devs, she’s exploring the vibrant art scene of West Africa or curating playlists that make debugging feel like dancing.'
        rating={4}
      />
    </>
  )
}

export default App
