import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';


function App() {
  let tabContent = "Please click a button";
  function handleSelect(selectedButton){
    //selectedButton => 'components','jsx','props','state'
   
    console.log("inside handleSelect selectedButton => "+selectedButton);
    tabContent = selectedButton;
    
  }

  console.log("App component executing");

  return (
    <div>
      <Header />
      <section id="core-concepts">
      <main>
        <h2>Core Concepts</h2>
        <ul>
          <CoreConcept 
            title={CORE_CONCEPTS[0].title}
            description={CORE_CONCEPTS[0].description}
            image ={CORE_CONCEPTS[0].image}/>
           <CoreConcept {...CORE_CONCEPTS[1]} />
           <CoreConcept {...CORE_CONCEPTS[2]} />
           <CoreConcept {...CORE_CONCEPTS[3]} />
        </ul>
      </main>
      </section>
      <section id="examples">
        <h2>Examples</h2>
        <menu>
          <TabButton onSelect={()=>handleSelect('components')}>Components</TabButton>
          <TabButton onSelect={()=>handleSelect('jsx')}>JSX</TabButton>
          <TabButton onSelect={()=>handleSelect('props')}>Props</TabButton>
          <TabButton onSelect={()=>handleSelect('state')}>State</TabButton>
        </menu>
        {tabContent}
      </section>
    </div>
  );
}

export default App;