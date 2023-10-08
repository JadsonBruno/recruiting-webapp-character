import { useCallback, useEffect, useState } from "react";
import Attributes from "./Attributes";
import Classes from "./Classes";
import { CLASS_LIST } from '../../consts.js';
import ClassDetails from "./ClassDetails";
import Skills from "./Skills";

function getValidClasses(currentAttributes) {
    const validClasses = [];
    Object.keys(CLASS_LIST).forEach((classValue) => {
        const classAttributes = CLASS_LIST[classValue];

        // check classes attribute values
        const isValid = Object.keys(classAttributes).every((attributeName) => {
            const classAttributeValue = classAttributes[attributeName];
            const currentAttributeValue = currentAttributes[attributeName].value;
            return currentAttributeValue >= classAttributeValue;
        });

        if (isValid) {
            validClasses.push(classValue);
        }
    });

    return validClasses;
}

function Character({character}) {
    const [characterValue, setCharacterValue] = useState(character);
    const [classDetails, setClassDetails] = useState(null);
    const [validClassesName, setValidClassesName] = useState([]);

    useEffect(() => {
        setValidClassesName(getValidClasses(characterValue?.attributes))
    }, [characterValue?.attributes]);

    const handleClassDetailsShow = useCallback((className) => {
        if (className === undefined) {
            setClassDetails(null);
            return;
        }

        setClassDetails({
            name: className,
            data: CLASS_LIST[className]
        });
    }, [setClassDetails]);

    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
      }}>
        <h2>
            Character: {character.index}
        </h2>
        <div style={{
            display: 'flex',
            justifyContent: 'space-around',
        }}>
            <Attributes character={characterValue} setCharacterData={setCharacterValue}/>
            <Classes onClassSelected={handleClassDetailsShow} validClassesName={validClassesName}/>
            {classDetails !== null ? <ClassDetails classDetails={classDetails} handleCloseClass={handleClassDetailsShow} /> : <></>}
            <Skills character={characterValue} setCharacterData={setCharacterValue} />
        </div>
      </div>
    );
}
  
export default Character;