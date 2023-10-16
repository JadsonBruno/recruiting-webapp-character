import { SKILL_LIST } from '../../consts.js';

function Skills({character, setCharacterData}) {
    const maximumTotalPoints = 10 + (4 * character.attributes['Intelligence'].modifier);

    const updateSkillValues = (skillName, nextValue, nextTotal) => {
        const currentSkill = character.skills[skillName];
        const skillModifier = character.skills[skillName].attributeModifier;

        const updatedSkills = { ...character.skills };
        updatedSkills[skillName] = {
            value: currentSkill.value + nextValue,
            attributeModifier: skillModifier,
            total: currentSkill.total + nextTotal,
        };

        setCharacterData({
            ...character,
            skills: updatedSkills,
        });
    };

    const handleIncrementSkill = skillName => {
        const totalSkillsPoints = Object.values(character.skills).reduce((acc, skill) => acc + skill.value, 0);

        if (totalSkillsPoints < maximumTotalPoints) {
            const skillModifier = character.skills[skillName].attributeModifier;
            const skillModifierValue = character.attributes[skillModifier].modifier;
            updateSkillValues(skillName, 1, 1 + skillModifierValue);
            return;
        }

        alert('You need more skill points! Upgrade intelligence to get more');
    };

    const handleDecrementSkill = skillName => {
        const currentSkill = character.skills[skillName];

        if (currentSkill.value > 0) {
            updateSkillValues(skillName, -1, -1);
            return;
        }

        alert('There is a minimum value to a skill.');
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
        <h2>Skills</h2>
        <p>Total skill points available: {maximumTotalPoints}</p>
        {SKILL_LIST.map(skill => {
            const skillName = skill.name;
            const skillValue = character.skills[skillName].value;
            const skillModifier = character.skills[skillName].attributeModifier;
            const skillModifierValue = character.attributes[skillModifier].modifier;
            const skillTotal = character.skills[skillName].value + skillModifierValue;

            return (
                <div key={skillName}>
                    {`${skillName}: ${skillValue} (Modifier: ${skillModifier}): ${skillModifierValue}`}
                    {`Total: ${skillTotal}`}
                    <button onClick={() => handleIncrementSkill(skill.name)} style={{marginLeft: '8px'}}>
                    +
                    </button>
                    <button onClick={() => handleDecrementSkill(skill.name)} style={{marginLeft: '4px'}}>
                    -
                    </button>
                </div>
            )
        })}
      </div>
    );
}

export default Skills;
