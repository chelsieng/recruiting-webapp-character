import { useState } from 'react';
import './App.css';
import { ATTRIBUTE_LIST, CLASS_LIST, SKILL_LIST } from './consts.js';


function Attributes({ attributes, setAttributes }) {
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

function Classes({ attributes, selectedClass, setSelectedClass }) {
  // Function to check if the character meets the min requirements
  const meetsRequirements = (requirements) => {
    return ATTRIBUTE_LIST.every(
      (attr) => attributes[attr] >= requirements[attr]
    );
  };

  return (
    <div style={{ display: 'flex' }} >
      < div style={{ flex: 1 }}>
        {/* Class display */}
        <h2>Classes</h2>
        <div>
          {Object.entries(CLASS_LIST).map(([className, requirements], index) => (
            <div
              key={index}
              onClick={() => setSelectedClass({ name: className, requirements })}
              style={{
                color: meetsRequirements(requirements) ? 'green' : 'red',
                cursor: 'pointer',
              }}
            >
              {className}
            </div>
          ))}
        </div>
      </div>

      <div style={{ flex: 1 }}>
        {/* Display minimum requirements for the class */}
        {selectedClass && (
          <div>
            <h2>{selectedClass.name} Minimum Required Statistics </h2>
            <div>
              {ATTRIBUTE_LIST.map((attribute, index) => (
                <div key={index}>
                  {attribute}: {selectedClass.requirements[attribute]}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div >
  );
}

function App() {
  // Initialize state for all attributes
  const initialAttributes = ATTRIBUTE_LIST.reduce((acc, attribute) => {
    acc[attribute] = 10;
    return acc;
  }, {});

  const [attributes, setAttributes] = useState(initialAttributes);
  const [selectedClass, setSelectedClass] = useState(null);

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Coding Exercise</h1>
      </header>
      <section style={{ display: 'flex' }} className="App-section">
        <Attributes attributes={attributes} setAttributes={setAttributes} />
        <Classes attributes={attributes} selectedClass={selectedClass} setSelectedClass={setSelectedClass} />
      </section>

    </div>
  );
}

export default App;
