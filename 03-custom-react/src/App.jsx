
import Header from './components/Header.jsx';
import CoreConcepts from './components/CoreConcepts.jsx';
import Examples from './components/Examples.jsx';


function App() {
  //const stateArray = useState('Please click a button in usestate');
 
  

  console.log("App component executing");

  return (
    <div>
      <Header />
      <CoreConcepts/>
      <Examples />
    </div>
  );
}

export default App;