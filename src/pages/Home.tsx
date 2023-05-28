import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';


function Home() {

    return (
        <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.75, ease: 'easeOut' }}>
            <section className="home">
                <div>
                    <h1>Hi, I'm Sonja Svidén</h1>
                    <h2>Frontend developer with knowledge in UX/UI design</h2>
                    <p>Working with my hands to make magic happen on the internet. View my <button><a href="/projects">
                        <Link to="/projects">Projects</Link>
                    </a></button>, <button><a href="/about">
                        <Link to="/about">About</Link>
                    </a></button>, <button><a href="/resume">
                        <Link to="/resume">Resume</Link>
                    </a></button>, or send me an email at either <button>
                            <a href="mailto:sonja.sviden@live.com">sonja.sviden@live.com</a></button> or fill in the <button><a href="/contact">
                                <Link to="/contact">contact form</Link>
                            </a></button>.
                    </p>
                </div>
                <div>
                    <img src={require('../assets/header-pic.png')} className='home-pic' alt='header-pic' />
                </div>
            </section>
        </motion.main>
    );
}

export default Home;
