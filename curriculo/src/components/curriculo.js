import '../styles/curriculo.css';
import React, { Component } from "react";

class Curriculo extends Component{
    render(){
        const { form } = this.props;
        return (
            <section id="curriculo">
                <div id="personal">
                    <img src={ form.personalInformations.photo } alt="Perfil"></img>
                    <div id="personalData">
                        <h1>{ form.personalInformations.name }</h1>
                        <h2>{ form.personalInformations.title }</h2>
                        <p>E-mail: { form.personalInformations.email }</p>
                        <p>Phone number: { form.personalInformations.phone }</p>
                    </div>
                </div>
                <div className="resume">
                    <h1>Resume</h1>
                    <p id="resume">{ form.personalInformations.resume }</p>
                </div>
                <div className="education">
                    <h1>Education</h1>
                    {
                        form.education[0].map((educationItem) => (
                            <div className="institution" key={ educationItem.id }> 
                                <h2>{educationItem.course}</h2>
                                <p>{ educationItem.institution }</p>
                                <p>Conclusion: { educationItem.date }</p>
                            </div>
                        ))
                    }
                </div>
                <div className="experience">
                    <h1>Work Experience</h1>
                    {form.work[0].map((workItem) => (
                        <div className="company" key={ workItem.id }> 
                            <h2>{ workItem.position }</h2>
                            <p>{ workItem.company }</p>
                            <div className="date">
                                <p>From: { workItem.dateFrom }</p>
                                <p>Until: { workItem.dateUntil }</p>
                            </div>
                            <p className="tasks">Tasks: { workItem.tasks }</p>
                        </div>
                    ))}
                </div>
            </section>
        );
    }
}

export default Curriculo;