import React, { useContext, useRef, useState } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';
import { themeContext } from '../../Context';

const Contact = () => {
    const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
    const [done, setDone] = useState(false);
    const form = useRef(null);
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_2cln6u8', 'template_epxxh2l', form.current, 'HI-CLVS2-HTD5MEEJ')
        .then((result) => {
            console.log(result.text);
            setDone(true)
            form.current.reset();
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <div className="contact-form" id='Contact'>
            <div className="w-left">
                <div className="awesome">
                    <span style={{color:darkMode? 'white' : ''}}>Get in touch</span>
                    <span>Contact me</span>
                    <div className="blur s-blur1" style={{background:'var(--purple)'}}></div>
                </div>
            </div>

            <div className="c-right">
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='from_name' className='user' placeholder='Name' />
                    <input type="email" name='from_email' className='user' placeholder='Email' />
                    <textarea name="message" className='user' placeholder='Message' />
                    <input type="submit" value='Send' className='button' />
                    <span>{done && 'Thanks for contact me!'}</span>
                    <div className="blur c-blur1" style={{background:'#ABF1FF94'}}></div>
                </form>
            </div>
        </div>
    );
};

export default Contact;