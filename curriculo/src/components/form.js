import '../styles/form.css';
import GeneralInformations from "./generalInformations";
import Education from "./education";
import WorkExperience from "./workExperience";
import Curriculo from "./curriculo.js";
import { useState } from 'react';
import { v4 } from 'uuid';
import { useReactToPrint } from 'react-to-print';
import { useRef } from 'react';

function Form(){
    const componentRef = useRef();
    const [educations, setEducations] = useState(
        [
            {
              id: v4(),
              institution: '',
              course: '',
              date: ''
            },
          ]
      );
    const [personal, setPersonal] = useState(
        {
            name: "",
            email: "",
            phone: "",
            photo: "",
            title: "",
            resume: ""
        }
    );
    const [experience, setExperience] = useState(
        [
            {
                id: v4(),
                company: "",
                position: "",
                tasks: "",
                dateFrom: "",
                dateUntil: ""
            },
        ]
    );
    const [form, setForm] = useState("");
    function HandleSubmit(event){
        event.preventDefault();
    }
    function HandleAddExperience(){
        setExperience([
            ...experience,
            {
                id: v4(),
                company: "",
                position: "",
                tasks: "",
                dateFrom: "",
                dateUntil: ""
            },
          ]);
    }
    function HandleAddEducation(){
        setEducations([
            ...educations,
            {
              id: v4(),
              institution: '',
              course: '',
              date: '',
            },
          ]);
    }
    function HandlePersonal(event){
        const { name, value } = event.target;
        setPersonal((prevPersonal) => {
            return({
                ...prevPersonal,
                [name]: value
            });
        });
    }
    function HandleFile(event){
        setPersonal((prevPersonal) => {
            return ({
                ...prevPersonal,
                photo: URL.createObjectURL(event.target.files[0]),
            });
        });
    }
    function HandleInstitution(event, id){
        setEducations((prevEducation) => {
            const newInstitution = prevEducation.map((educationItem) => {
                if(educationItem.id === id){
                    return (
                        {
                            ...educationItem,
                            institution: event.target.value,
                        }
                    );
                }else{
                    return educationItem;
                }
            });
            return newInstitution;
        });
    }
    function HandleCourse(event, id){
        setEducations((prevEducation) => {
            const newCourse = prevEducation.map((educationItem) => {
                if(educationItem.id === id){
                    return (
                        {
                            ...educationItem,
                            course: event.target.value,
                        }
                    );
                }else{
                    return educationItem;
                }
            });
            return newCourse;
        });
    }
    function HandleDate(event, id){
        setEducations((prevEducation) => {
            const newDate = prevEducation.map((educationItem) => {
                if(educationItem.id === id){
                    return (
                        {
                            ...educationItem,
                            date: event.target.value,
                        }
                    );
                }else{
                    return educationItem;
                }
            });
            return newDate;
        });
    }
    function HandleCompany(event, id){
        setExperience((prevExperience) => {
            const newCompany = prevExperience.map((experienceItem) => {
                if(experienceItem.id === id){
                    return (
                        {
                            ...experienceItem,
                            company: event.target.value,
                        }
                    );
                }else{
                    return experienceItem;
                }
            });
            return newCompany;
        });
    }
    function HandlePosition(event, id){
        setExperience((prevExperience) => {
            const newCompany = prevExperience.map((experienceItem) => {
                if(experienceItem.id === id){
                    return (
                        {
                            ...experienceItem,
                            position: event.target.value,
                        }
                    );
                }else{
                    return experienceItem;
                }
            });
            return newCompany;
        });
    }
    function HandleTasks(event, id){
        setExperience((prevExperience) => {
            const newCompany = prevExperience.map((experienceItem) => {
                if(experienceItem.id === id){
                    return (
                        {
                            ...experienceItem,
                            tasks: event.target.value,
                        }
                    );
                }else{
                    return experienceItem;
                }
            });
            return newCompany;
        });
    }
    function HandleDateFrom(event, id){
        setExperience((prevExperience) => {
            const newCompany = prevExperience.map((experienceItem) => {
                if(experienceItem.id === id){
                    return (
                        {
                            ...experienceItem,
                            dateFrom: event.target.value,
                        }
                    );
                }else{
                    return experienceItem;
                }
            });
            return newCompany;
        });
    }
    function HandleDateUntil(event, id){
        setExperience((prevExperience) => {
            const newCompany = prevExperience.map((experienceItem) => {
                if(experienceItem.id === id){
                    return (
                        {
                            ...experienceItem,
                            dateUntil: event.target.value,
                        }
                    );
                }else{
                    return experienceItem;
                }
            });
            return newCompany;
        });
    }
    function DelEducation(id){
        setEducations((prevEducation) => {
            const newForm = prevEducation.filter((educationItem) => educationItem.id !== id )
            return newForm;
        });
    }
    function DelExperience(id){
        setExperience((prevExperience) => {
            const newForm = prevExperience.filter((experienceItem) => experienceItem.id !== id )
            return newForm;
        });
    }
    function Load(){
        setForm(
            {
                personalInformations:{
                    name: personal.name,
                    email: personal.email,
                    phone: personal.phone,
                    photo: personal.photo,
                    title: personal.title,
                    resume: personal.resume
                },
                education:[
                    educations.map((educationItem) => {
                        const edu = {
                            institution: educationItem.institution,
                            course: educationItem.course,
                            date: educationItem.date
                        };
                        return edu;
                    })
                ],
                work:[
                    experience.map((experienceItem) => {
                        const company = {
                            company: experienceItem.company,
                            position: experienceItem.position,
                            tasks: experienceItem.tasks,
                            dateFrom: experienceItem.dateFrom,
                            dateUntil: experienceItem.dateUntil
                        };
                        return company;
                    })
                ]
            }
        );
        console.log({
            personalInformations:{
                name: personal.name,
                email: personal.email,
                phone: personal.phone,
                photo: personal.photo,
            },
            education:[
                educations.map((educationItem) => {
                    const edu = {
                        institution: educationItem.institution,
                        course: educationItem.course,
                        date: educationItem.date
                    };
                    return edu;
                })
            ],
            work:[
                experience.map((experienceItem) => {
                    const company = {
                        company: experienceItem.institution,
                        position: experienceItem.course,
                        tasks: experienceItem.date,
                        dateFrom: experienceItem.dateFrom,
                        dateUntil: experienceItem.dateUntil
                    };
                    return company;
                })
            ]
        });
    }
    function Data(){
        if(form !== ""){
            return <div id="backgroundCurriculo"><Curriculo form={ form } ref={ componentRef } ></Curriculo></div>
        }else{
            return <div></div>
        }
    }
    async function Print(){
        await Load();
        GeneratePDF();
    }
    const GeneratePDF = useReactToPrint({ content: () => componentRef.current });
    return (
        <main>
            <section id="form">
                <form onSubmit={ HandleSubmit }>
                    <GeneralInformations
                        HandlePersonal={ HandlePersonal }
                        HandleFile={ HandleFile }
                    ></GeneralInformations>
                    <Education 
                        educations={ educations }
                        HandleAddEducation={ HandleAddEducation }
                        HandleInstitution={ HandleInstitution }
                        HandleCourse={ HandleCourse }
                        HandleDate={ HandleDate } 
                        DelEducation={ DelEducation }
                    >
                    </Education> 
                    <WorkExperience
                        experience={ experience }
                        HandleCompany={ HandleCompany }
                        HandlePosition={ HandlePosition }
                        HandleTasks={ HandleTasks }
                        HandleDateFrom={ HandleDateFrom }
                        HandleDateUntil={ HandleDateUntil }
                        DelExperience={ DelExperience }
                        HandleAddExperience={ HandleAddExperience }
                    ></WorkExperience>
                    <div id="buttons">
                        <button onClick={ Load }>Load Example</button>
                        <button onClick={ Print }>Generate PDF</button>
                    </div>
                </form>
            </section>
            <Data></Data>
        </main>
    );
}
export default Form;