function WorkExperience({ 
    experience,
    HandleCompany,
    HandlePosition,
    HandleTasks,
    HandleDateFrom,
    HandleDateUntil,
    DelExperience,
    HandleAddExperience
}){
    return (
        <div className="background" id="work">
            <h2>Work Experience </h2>
            {experience.map((experience) => (
                <div className="formExperience" key={experience.id}>
                    <div className="inputExperience">
                        <label htmlFor={`inputCompany-${experience.id}`}>Company name: </label>
                        <input maxLength="100" type="text" onChange={ (event) => { HandleCompany(event, experience.id) } } name={`inputCompany-${experience.id}`} placeholder="Enter the company name" required></input>
                    </div>
                    <div className="inputExperience">
                        <label htmlFor={`inputPosition-${experience.id}`}>Position: </label>
                        <input maxLength="100" onChange={ (event) => { HandlePosition(event, experience.id) } } name={`inputPosition-${experience.id}`} type="text" placeholder="Enter the position title" required></input>
                    </div>
                    <div className="inputExperience">
                        <label htmlFor={`dateFrom-${experience.id}`}>Date From: </label>
                        <input maxLength="100" onChange={ (event) => { HandleDateFrom(event, experience.id) } } name={`dateFrom-${experience.id}`} type="text" placeholder="Date from" required></input>
                    </div>
                    <div className="inputExperience">
                        <label htmlFor={`dateUntil-${experience.id}`}>Date Until: </label>
                        <input maxLength="100" onChange={ (event) => { HandleDateUntil(event, experience.id) } } name={`dateUntil-${experience.id}`} type="text" placeholder="Date until" required></input>
                    </div>
                    <div className="textarea">
                        <label htmlFor={`inputTasks-${experience.id}`}>Tasks: </label>
                        <textarea maxLength="300" onChange={ (event) => { HandleTasks(event, experience.id) } } name={`dateTasks-${experience.id}`} type="text" placeholder="Enter the main tasks of the job" required></textarea>
                    </div>
                    <button type="button" onClick={ () => { DelExperience(experience.id) } }>Delete experience</button>
                </div>
            ))}
            <button type="submit" onClick={ () => { HandleAddExperience() } }>Add Experience</button>
        </div>
    );
}
export default WorkExperience;