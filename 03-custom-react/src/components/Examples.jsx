import { useState } from 'react';
import TabButton from './TabButton.jsx';
import Section from './Section.jsx';
import { EXAMPLES } from '../data.js';

export default function Examples(){
    const [selectedTopic,setSelectedTopic] = useState('');
    
    
    //let tabContent = "Please click a button";
    function handleSelect(selectedButton){
    //selectedButton => 'components','jsx','props','state'
    setSelectedTopic(selectedButton);
    console.log("inside handleSelect selectedButton => "+selectedButton);
    //tabContent = selectedButton;
    }
    return (
    <Section id="examples">
    <h2>Examples</h2>
    <menu>
      <TabButton onClick={()=>handleSelect('components')} isSelected={selectedTopic=='components'}>Components</TabButton>
      <TabButton onClick={()=>handleSelect('jsx')} isSelected={selectedTopic=='jsx'}>JSX</TabButton>
      <TabButton onClick={()=>handleSelect('props')} isSelected={selectedTopic=='props'}>Props</TabButton>
      <TabButton onClick={()=>handleSelect('state')} isSelected={selectedTopic=='state'}>State</TabButton>
    </menu>
    {!selectedTopic ? <p>Please select a topic.</p> :
    <div id="tab-content">
      <h3>{EXAMPLES[selectedTopic].title}</h3>
      <p>{EXAMPLES[selectedTopic].description}</p>
      <pre>{EXAMPLES[selectedTopic].code}</pre>
    </div>}
  </Section>
    )
}