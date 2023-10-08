const ClassDetails = ({ classDetails, handleCloseClass }) => {
    const {name, data} = classDetails;

    return(
        <div style={{border: '2px solid black', padding: '16px',height: '100%'}}>
            <h2>{name} Minimum Requirements</h2>
            {Object.keys(data)?.map((name) => {
                return(
                    <p key={name}>
                        {name}: {data[name]}
                    </p>
                )
            })}
            <button onClick={() => handleCloseClass()}>Close Requirement View</button>
        </div>
    )
    
}

export default ClassDetails;