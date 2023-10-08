import { useEffect, useState } from 'react';
import './App.css';
import { ATTRIBUTE_LIST, CLASS_LIST, SKILL_LIST } from './consts.js';
import MenuOptions from './components/MenuOptions';
import Character from './components/Character';


function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    // get characters from API
  }, []);

  const newCharacter = () => {
    const attributes = {};
    ATTRIBUTE_LIST.map((name) => attributes[name] = {value: 10, modifier: 0});
    const skills = {};
    SKILL_LIST.map((skill) => {
      skills[skill.name] = {
        value: 0,
        attributeModifier: skill.attributeModifier,
        total: 0
      };
    });

    let newCharacter = {
      index: characters.length + 1,
      attributes: attributes,
      skills: skills,
      skillPoints: 10,
    }

    setCharacters([...characters, newCharacter]);
  }

  const handleOptionBar = (type) => {
    switch(type) {
      case 'ADD':
        newCharacter();
        break;
      case 'RESET':
        setCharacters([]);
        break;
      case 'SAVE':
        break;
      default:
        break;
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Coding Exercise</h1>
      </header>
      <section style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '16px 0'
      }}>
        <MenuOptions handleOptionClick={handleOptionBar} />
      </section>
      <section>
        {characters?.map((character, index) => {
          return(
            <Character key={index} character={character} />
          )
        })}
      </section>
    </div>
  );
}

export default App;
