import '../styles/curriculo.css';
import React, { Component } from "react";

class Curriculo extends Component{
    render(){
        const { form } = this.props;
        return (
            <section id="curriculo">
                <div id="personal">
                    {(form.personalInformations.photo !== "") 
                        ? <img src={ form.personalInformations.photo } alt="Perfil"></img> 
                        : ""}
                    <div id="personalData">
                        <h1>{ form.personalInformations.name }</h1>
                        <h2>{ form.personalInformations.title }</h2>
                        <p>{ form.personalInformations.email==="" ? "" : "E-mail: "+form.personalInformations.email }</p>
                        <p>{ form.personalInformations.phone==="" ? "" : "Phone number: "+form.personalInformations.phone }</p>
                    </div>
                </div>
                <div className="resume">
                    { form.personalInformations.resume==="" ? "" : <h1>Resume</h1> }
                    { form.personalInformations.resume==="" ? "" : <p id="resume">{ form.personalInformations.resume }</p> }
                </div>
                <div className="education">
                    { (form.education[0][0] === undefined || form.education[0][0].course === "") ? "" : <h1>Education</h1> }
                    {
                        form.education[0].map((educationItem) => (
                            <div className="institution" key={ educationItem.id }> 
                                { educationItem.course==="" ? "" : <h2>{educationItem.course}</h2> }
                                { educationItem.institution==="" ? "" : <p>{ educationItem.institution }</p> }
                                { (educationItem.date === "") ? "" : <p>Conclusion: { educationItem.date }</p> }
                            </div>
                        ))
                    }
                </div>
                <div className="experience">
                    { (form.work[0][0]===undefined || form.work[0][0].company==="") ? "" : <h1>Work Experience</h1> }
                    {form.work[0].map((workItem) => (
                        <div className="company" key={ workItem.id }> 
                            { workItem.position==="" ? "" : <h2>{ workItem.position }</h2> }
                            { workItem.company==="" ? "" : <p>{ workItem.company }</p> }
                            <div className="date">
                                { (workItem.dateFrom === "") ? "" : <p>From: { workItem.dateFrom }</p> }
                                { (workItem.dateUntil === "") ? "" : <p>Until: { workItem.dateUntil }</p> }
                            </div>
                            { (workItem.tasks === "") ? "" : <p className="tasks">Tasks: { workItem.Tasks }</p> }
                        </div>
                    ))}
                </div>
            </section>
        );
    }
}

export default Curriculo;