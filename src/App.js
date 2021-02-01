import './App.css';
import personalCard from './components/personalCard';

function App() {
  return (
    
    <div className="App">
      <personalCard lastName={"Qawasmeh"}firstName={"Samer"} age={35} hairColor={"hair color: Black"}/>

      <personalCard lastName={"Doe"}firstName={"Jane"}age={30}hairColor={"hair color: brown"}/>

      <personalCard lastName={"Smith"}firstName={"John"} age={20}hairColor={"hair color: bronze"}/>
</div>
    
    
  );
}

export default App;
