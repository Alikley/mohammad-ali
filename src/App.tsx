import './App.css';
import Status from './components/Status';

function App() {
  return (
    <div className="App">
     <Status handleClick={(e) =>{
      console.log("Click Me",e);
      
     }}/>
    </div>
  );
}

export default App;
