import { CLASS_LIST } from '../../consts.js';

function Classes({onClassSelected, validClassesName}) {
    return (
    <div
        style={{
            display: 'flex',
            flexDirection: 'column',
            marginRight: '8px',
            border: '1px solid black',
            padding: '16px',
            height: '100%'
        }}
    >
        <h2>Classes</h2>
        {Object.keys(CLASS_LIST)?.map((className) => (
            <div key={className} style={{cursor: 'pointer', color: validClassesName.includes(className) ? 'red' :'black'}} onClick={() => onClassSelected(className)}>
                {className}
            </div>
        ))}
      </div>
    );
}

export default Classes;
