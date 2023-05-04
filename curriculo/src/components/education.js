
function Education(
    { educations, HandleAddEducation, HandleInstitution, HandleCourse,
     HandleDate, DelEducation } ){
    return (
        <div className="background" id="education">
            <h2>Education</h2>
            {educations.map((education) => (
                <div className="formEducation" key={education.id}>
                    <div className="inputEducation" type="text">
                        <label id={ "label-institution-"+education.id }  htmlFor={`inputInstitution-${education.id}`}>Institution name: </label>
                        <input aria-labelledby={ "label-institution-"+education.id } type="text" maxLength="100" onChange={ (event) => { HandleInstitution(event, education.id) } } name={`inputInstitution-${education.id}`} placeholder="Enter the name of your school or university" required></input>
                    </div>
                    <div className="inputEducation">
                        <label id={ "label-course-"+education.id } htmlFor={`inputCourse-${education.id}`}>Course Name: </label>
                        <input aria-labelledby={ "label-course-"+education.id } maxLength="100" onChange={ (event) => { HandleCourse(event, education.id) } } name={`inputCourse-${education.id}`} type="text" placeholder="Enter the name of your course" required></input>
                    </div>
                    <div className="inputEducation">
                        <label id={ "label-date-"+education.id }htmlFor={`dateInput-${education.id}`}>Date of conclusion: </label>
                        <input aria-labelledby={ "label-date-"+education.id } maxLength="100" onChange={ (event) => { HandleDate(event, education.id) } } name={`dateInput-${education.id}`} type="text" placeholder="Enter a date" required></input>
                    </div>
                    <button aria-label={ (education.course==="") ? "Delete education empty" : "Delete education "+education.course } type="button" onClick={ () => { DelEducation(education.id) } }>Delete education</button>
                </div>
            ))} 
            <button aria-label="Add a new education form" type="submit" onClick={ () => { HandleAddEducation() } }>Add Education</button>
        </div>
    );
}
export default Education;