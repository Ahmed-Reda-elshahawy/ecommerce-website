import React, { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
// import { useForm } from 'react-hook-form';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./Contact.scss"

const Contact = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    let [user_name, setUser_name] = useState("");
    let [user_email, setUser_email] = useState("");
    let [message, setMessage] = useState("");
    let [errors, setErrors] = useState({});

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        let errors = {};
        if (!user_email) {
            errors.user_name = "Name is required";
        }
        if (!user_email) {
            errors.user_email = "Email is required";
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(user_email)) {
            errors.user_email = "Invalid email address";
        }
        if (!message) {
            errors.message = "Please write your message";
        }
        setErrors(errors);

        if (Object.keys(errors).length === 0) {
            emailjs.sendForm('service_9lch7g1', 'template_yyovj7g', form.current, '6KFGwRwYAXaei7qAy')
                .then((result) => {
                    console.log(result.text);
                    console.log("sent successfully");
                }, (error) => {
                    console.log(error.text);
                });
            setUser_name("");
            setUser_email("");
            setMessage("");
        }
    };


    return (
        <main className='contact mt-5 pt-5'>
            <section className='container contact-content position-relative mx-auto mt-5'>
                <h2 className='text-center mb-4 main-color' data-aos="fade-down">Contact Us</h2>
                <form ref={form} onSubmit={sendEmail}>
                    <label className='text-white'>Name</label>
                    <input className='w-100 p-2 rounded shadow-sm' data-aos="fade-up" type="text" name="user_name" value={user_name} onChange={e => setUser_name(e.target.value)} />
                    {errors.user_name && <p className="m-0" style={{ color: "tomato", fontSize: "0.8rem" }}>* {errors.user_name}</p>}
                    <label className='text-white mt-4'>Email</label>
                    <input className='w-100 p-2 rounded shadow-sm' data-aos="fade-up" type="email" name="user_email" value={user_email} onChange={e => setUser_email(e.target.value)} />
                    {errors.user_email && <p className="m-0" style={{ color: "tomato", fontSize: "0.8rem" }}>* {errors.user_email}</p>}
                    <label className='text-white mt-4'>Message</label>
                    <textarea className='w-100 p-2 rounded shadow-sm' data-aos="fade-up" name="message" value={message} onChange={e => setMessage(e.target.value)} />
                    {errors.message && <p className="m-0" style={{ color: "tomato", fontSize: "0.8rem" }}>* {errors.message}</p>}
                    <input className='w-100 btn main-bg fw-bold text-light mt-4' type="submit" value="Send" />
                </form>
            </section>
        </main>
    )
}

export default Contact