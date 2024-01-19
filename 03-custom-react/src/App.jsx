import { useState } from 'react';

import { EXAMPLES } from './data.js';
import Header from './components/Header.jsx';
import CoreConcepts from './components/CoreConcepts.jsx';
import TabButton from './components/TabButton.jsx';


function App() {
  //const stateArray = useState('Please click a button in usestate');
  const [selectedTopic,setSelectedTopic] = useState('');
  let tabContent = "Please click a button";
  function handleSelect(selectedButton){
    //selectedButton => 'components','jsx','props','state'
    setSelectedTopic(selectedButton);
    console.log("inside handleSelect selectedButton => "+selectedButton);
    tabContent = selectedButton;

    
  }

  console.log("App component executing");

  return (
    <div>
      <Header />
      <CoreConcepts/>
      <section id="examples">
        <h2>Examples</h2>
        <menu>
          <TabButton onSelect={()=>handleSelect('components')} isSelected={selectedTopic=='components'}>Components</TabButton>
          <TabButton onSelect={()=>handleSelect('jsx')} isSelected={selectedTopic=='jsx'}>JSX</TabButton>
          <TabButton onSelect={()=>handleSelect('props')} isSelected={selectedTopic=='props'}>Props</TabButton>
          <TabButton onSelect={()=>handleSelect('state')} isSelected={selectedTopic=='state'}>State</TabButton>
        </menu>
        {!selectedTopic ? <p>Please select a topic.</p> :
        <div id="tab-content">
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>{EXAMPLES[selectedTopic].code}</pre>
        </div>}
      </section>
    </div>
  );
}

export default App;