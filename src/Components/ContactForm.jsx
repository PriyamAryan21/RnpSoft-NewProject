import React from 'react';
import './ContactForm.css';
import emailjs from '@emailjs/browser';
import { useRef } from 'preact/hooks';
import phone from './Images/phone.png'
import envelope from './Images/envelope.png'
import map from './Images/map.png'

const ContactForm = () => {

    const form = useRef();

    const handleInputChange = (event) => {
        event.preventDefault();
        emailjs
            .sendForm('service_6qdb7ra', 'template_xqzc5yh', form.current, {
                publicKey: '5ZKs9U4ECXgbsDJiu',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    form.current.reset();
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };


    return (
        <>
            <div class="parent">
                <div class="top-half"></div>
                <div class="bottom-half"></div>
                <div className='Main-content'>
                    <h1>Get in touch.</h1>
                    <p>Our team would be love to hear from you!</p>
                    <div className="OurDetails">
                        <div className="details">
                            <div className="imgHolder">
                                <img src={map} alt="" />
                            </div>
                            <div className='detailsHolder'>
                                <h3>Address</h3>
                                <p>17224 S. Figueroa Street, Gardena, CA 90248, USA</p>
                            </div>
                        </div>
                        <div className="details">
                            <div className="imgHolder">
                                <img src={envelope} alt="" />
                            </div>
                            <div className='detailsHolder'>
                                <h3>Email</h3>
                                <p>hello@deupload.com</p>
                            </div>
                        </div>
                        <div className="details">
                            <div className="imgHolder">
                                <img src={phone} alt="" />
                            </div>
                            <div className='detailsHolder'>
                                <h3>Phone</h3>
                                <p>+1 415 800-3128</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='Form-Div'>
                    <form ref={form} onSubmit={handleInputChange}>
                        <div className='formGroup'>
                            <label htmlFor="user_firstName">YOUR NAME</label>
                            <input type="text" name='user_firstName' placeholder={"Vitalik Buterin"} />
                        </div>
                        <div className='formGroup'>
                            <label htmlFor="user_email">EMAIL ADDRESS</label>
                            <input type="text" name="user_email" placeholder={"vitalik@company.com"} />
                        </div>
                        <div className='formGroup'>
                            <label htmlFor="user_company">{`COMPANY (OPTIONAL)`}</label>
                            <input type="text" name="user_company"  placeholder={"One Solution LLC"} />
                        </div>
                        <div className='formGroup'>
                            <label htmlFor="user_phone">{`PHONE NUMBER (OPTIONAL)`} </label>
                            <input type="text" name='user_phone' placeholder={"+1 415 800-1287"} />
                        </div>
                        <div className='formGroup'>
                            <label htmlFor="user_subject">SUBJECT</label>
                            <input type="text" name='user_subject' placeholder={"I want to ask something"} />
                        </div>
                        <div className='formGroup' style={{ marginBottom: "0px" }}>
                            <label htmlFor="user_message">MESSAGE</label>
                            <input type="text" name='user_message' placeholder={"Hi there, I would like to..."} style={{ height: "80px" }} />
                        </div>
                        <button type='submit'>Send</button>
                    </form>
                </div>
            </div>

        </>
    );
};

export default ContactForm;
