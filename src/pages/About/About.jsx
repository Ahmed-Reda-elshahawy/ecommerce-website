import React, { useEffect } from 'react';
import "./About.scss";
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, [])

    return (
        <main className='container about mt-5 pt-5 d-md-flex gap-md-5 align-items-center'>
            <section className='img-sec w-md-50' data-aos="flip-right" >
                <img src={process.env.PUBLIC_URL + "/Images/about.jpg"} className='w-100 rounded-5 border border-3 border-white p-2' alt="about-img" />
            </section>
            <section className='text-sec w-md-50 mt-4 mt-md-0' data-aos="flip-right">
                <p data-aos="fade-down" data-aos-easing="linear" >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab eum mollitia quo, amet libero repellendus voluptates perferendis id architecto impedit, nemo, aliquam quos. Neque in sapiente eius explicabo, possimus quod.
                </p>
                <p data-aos="fade-up" data-aos-easing="linear" >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab eum mollitia quo, amet libero repellendus voluptates perferendis id architecto impedit, nemo, aliquam quos. Neque in sapiente eius explicabo, possimus quod.
                </p>
            </section>
        </main>
    )
}

export default About