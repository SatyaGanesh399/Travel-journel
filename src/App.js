
import './App.css';
import TravelData from './Components/TravelData'
import TravelCards from './Components/TravelCards'
import Header from './Components/Header'

function App() {
  
  const cards = TravelData.map(data => {
    return (
        <TravelCards
            item={data}
        />
    )
})
  return (
    <div className="App">
      <Header />
      {cards} 
    </div>
  );
}

export default App;
