import { ATTRIBUTE_LIST } from '../../consts.js';

const MAXIMUM_ATTRIBUTE_POINTS = 70;

function Attributes({character, setCharacterData}) {
    const calculateModifier = (attributeValue) => {
      return (Math.floor(attributeValue / 2)) - 5;
    }

    const handleIncrementAttribute = attributeName => {
      const totalAttributePoints = Object.values(character.attributes).reduce((acc, attribute) => acc + attribute.value, 0);

      if (totalAttributePoints < MAXIMUM_ATTRIBUTE_POINTS) {
        const newAttributePoint = character.attributes[attributeName].value + 1;
        const newCharacterData = {
          ...character,
          attributes: {
            ...character.attributes,
            [attributeName]: {value: newAttributePoint, modifier: calculateModifier(newAttributePoint)}
          }
        }

        setCharacterData(newCharacterData);
      } else {
        alert('A Character can have up to 70 Delegated Attribute Points');
      }
    };

    const handleDecrementAttribute = attributeName => {
      if (character.attributes[attributeName].value > 0) {
        const newAttributePoint = character.attributes[attributeName].value - 1;
        const newCharacterData = {
          ...character,
          attributes: {
            ...character.attributes,
            [attributeName]: {value: newAttributePoint, modifier: calculateModifier(newAttributePoint)}
          }
        }

        setCharacterData(newCharacterData);
      }
    };


    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        marginRight: '8px',
        border: '1px solid black',
        padding: '16px',
        height: '100%'
      }}>
        <h2>Attributes</h2>
        {ATTRIBUTE_LIST.map(attribute => (
            <div key={attribute}>
                {attribute}: {character.attributes[attribute].value} {`(Modifier: ` + character.attributes[attribute].modifier + `)`}
                <button onClick={() => handleIncrementAttribute(attribute)} style={{marginLeft: '4px'}}>
                  +
                </button>
                <button onClick={() => handleDecrementAttribute(attribute)} style={{marginLeft: '4px'}}>
                  -
                </button>
            </div>
        ))}
      </div>
    );
}
  
export default Attributes;
