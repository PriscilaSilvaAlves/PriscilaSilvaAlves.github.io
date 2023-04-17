import '../styles/generalInformations.css';

function GeneralInformations({ HandlePersonal, HandleFile }){
    return (
        <div className="background">
            <h2>General Informations</h2>
            <div className="formPersonal">
                <div className="input" type="text">
                    <label htmlFor="name">Name: </label>
                    <input type="text" maxLength="100" onChange={ (event) => { HandlePersonal(event) } } name="name" placeholder="Enter your full name" required></input>
                </div>
                <div className="input">
                    <label htmlFor="email">E-mail: </label>
                    <input name="email" maxLength="100" onChange={ (event) => { HandlePersonal(event) } } type="e-mail" placeholder="email@domain.com" required></input>
                </div>
                <div className="input">
                    <label htmlFor="phone">Phone number: </label>
                    <input name="phone" maxLength="20" onChange={ (event) => { HandlePersonal(event) } } type="tel" placeholder="(XX) XXXX-XXXX" required></input>
                </div>
                <div className="input">
                    <label htmlFor="title">Title: </label>
                    <input name="title" maxLength="50" onChange={ (event) => { HandlePersonal(event) } } type="text" placeholder="Enter your title" required></input>
                </div>
                <div className="textarea">
                    <label htmlFor="resume">Resume: </label>
                    <textarea name="resume" maxLength="500" onChange={ (event) => { HandlePersonal(event) } } placeholder="Enter your resume" required></textarea>
                </div>
                <div className="input">
                    <label>Choose a image: </label>
                    <input type="file" onChange={ (event) => { HandleFile(event) } }></input>
                </div>
            </div>
        </div>
    );
}
export default GeneralInformations;