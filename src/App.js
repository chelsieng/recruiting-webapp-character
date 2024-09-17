import { useState } from 'react';
import './App.css';
import { ATTRIBUTE_LIST, CLASS_LIST, SKILL_LIST } from './consts.js';


function Attributes() {
  // Initialize state for all attributes
  const initialAttributes = ATTRIBUTE_LIST.reduce((acc, attribute) => {
    acc[attribute] = 0;
    return acc;
  }, {});

  const [attributes, setAttributes] = useState(initialAttributes);

  // Function to increment the value of an attribute
  const incrementValue = (attribute) => {
    setAttributes((prevAttributes) => ({
      ...prevAttributes,
      [attribute]: prevAttributes[attribute] + 1,
    }));
  };

  // Function to decrement the value of an attribute
  const decrementValue = (attribute) => {
    setAttributes((prevAttributes) => ({
      ...prevAttributes,
      [attribute]: prevAttributes[attribute] - 1,
    }));
  };
  return (
    <div>
      <h2>Attributes</h2>
      <div>
        {ATTRIBUTE_LIST.map((attribute, index) => (
          <div key={index}>{attribute}: {attributes[attribute]}
            <button onClick={() => incrementValue(attribute)}>+</button>
            <button onClick={() => decrementValue(attribute)}>-</button>
          </div>
        ))}
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Coding Exercise</h1>
      </header>
      <section className="App-section">
        <Attributes />
      </section>
    </div>
  );
}

export default App;
