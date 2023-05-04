function GeneralInformations({ HandlePersonal, HandleFile }){
    return (
        <div className="background">
            <h2>General Informations</h2>
            <div className="formPersonal">
                <div className="input" type="text">
                    <label id="label-name" htmlFor="name">Name: </label>
                    <input aria-labelledby="label-name" type="text" maxLength="100" onChange={ (event) => { HandlePersonal(event) } } name="name" placeholder="Enter your full name" required></input>
                </div>
                <div className="input">
                    <label id="label-email" htmlFor="email">E-mail: </label>
                    <input aria-labelledby="label-email" name="email" maxLength="100" onChange={ (event) => { HandlePersonal(event) } } type="e-mail" placeholder="email@domain.com" required></input>
                </div>
                <div className="input">
                    <label id="label-phone" htmlFor="phone">Phone number: </label>
                    <input aria-labelledby="label-phone" name="phone" maxLength="20" onChange={ (event) => { HandlePersonal(event) } } type="tel" placeholder="(XX) XXXX-XXXX" required></input>
                </div>
                <div className="input">
                    <label id="label-title" htmlFor="title">Title: </label>
                    <input aria-labelledby="label-title" name="title" maxLength="50" onChange={ (event) => { HandlePersonal(event) } } type="text" placeholder="Enter your title" required></input>
                </div>
                <div className="textarea">
                    <label id="label-resume" htmlFor="resume">Resume: </label>
                    <textarea aria-labelledby="label-resume" name="resume" maxLength="500" onChange={ (event) => { HandlePersonal(event) } } placeholder="Enter your resume" required></textarea>
                </div>
                <div className="input">
                    <label id="label-image" htmlFor="image">Choose a image: </label>
                    <input aria-labelledby="label-image" name="image" type="file" onChange={ (event) => { HandleFile(event) } }></input>
                </div>
            </div>
        </div>
    );
}
export default GeneralInformations;