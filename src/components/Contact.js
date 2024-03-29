import React from 'react'
import firebase from './FirebaseConfig'

// import contact data
import { contact } from '../data'
import { useState } from 'react';
import { toast } from "react-toastify";

const Contact = () => {
    const initialFormState = {
        name: "",
        email: "",
        subject: "",
        msg: "",
      };
    const [personalData, setPersonalData] = useState(initialFormState);

      const handleInputs = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setPersonalData({ ...personalData, [name]: value });
      };

      const isFormValid = personalData.name !== "" && personalData.email !== "" && personalData.subject !== "" && personalData.msg !== ""; 

    // Create the database in the firebase database
    const contactForm = firebase.database().ref("contactMessages");

    const contactFormSubmit = (e) => {
        e.preventDefault();
        saveMessages(personalData.name, personalData.email, personalData.subject, personalData.msg);

        setPersonalData(initialFormState)

        toast.success("Your message sent successfully");
    }

    const saveMessages = (name, email, subject, msg) => {
        var newContactFormRef = contactForm.push();
        newContactFormRef.set({
            name: name,
            email: email,
            subject: subject,
            msg: msg,
        })
    }

    return (
        <section id='contact' className='section bg-primary'>
            <div className="container mx-auto">
                {/* section title */}
                <div className="flex flex-col items-center text-center">
                    <h2 className='section-title before:content-contact relative before:absolute before:opacity-40 before:-top-7 before:-left-40 before:hidden before:lg:block'>Contact me</h2>
                    <p className="subtitle text-sky-300">Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!</p>
                </div>
                <div className="flex flex-col lg:gap-x-8 lg:flex-row">
                    {/* info */}
                    <div className="flex flex-1 flex-col items-start space-y-8 mb-12 lg:mb-0 lg:pt-2">
                        {contact.map((item, index) => {
                            const { icon, title, subtitle, description, link } = item;
                            return <div className="flex flex-col lg:flex-row gap-x-4" key={index}>
                                <div className="text-accent rounded-sm w-14 h-14 flex items-start justify-center mt-2 mb-4 lg:mb-0 text-2xl">{icon}</div>
                                <div>
                                    <h4 className='font-body text-xl mb-1'>{title}</h4>
                                    <p className='mb-1'>{subtitle}</p>
                                    <p className='text-accent font-normal'><a href={link}>{description}</a></p>
                                </div>
                            </div>
                        })}
                    </div>

                    {/* form */}
                    <form id='contact_form' className='space-y-8 w-full max-w-[780px]' onSubmit={(e) => e.preventDefault()}>
                        <div className="flex gap-8">
                            <input className='input' type="text" name="name" placeholder='Your name *' value={personalData.name} onChange={handleInputs} required id='name' />
                            <input className='input' type="email" name="email" placeholder='Your email *' required id='email' value={personalData.email} onChange={handleInputs} />
                        </div>
                        <input className='input' type="text" name="subject" placeholder='Subject *' required id='subject' value={personalData.subject} onChange={handleInputs} />
                        <textarea id='msg' name="msg" className='textarea' required placeholder='Your message *' value={personalData.msg} onChange={handleInputs}></textarea>
                        <button className={`py-4 px-7 font-medium text-${!isFormValid ? "gray-200" : "white"} flex items-center justify-center rounded-sm  transition-all; btn-lg bg-${!isFormValid ? "secondary" : "accent"} hover:bg-${isFormValid && "accent"} `} disabled={!isFormValid}  required onClick={contactFormSubmit} >Send message</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact