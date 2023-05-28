import { motion } from 'framer-motion';
import React from 'react';

function Contact() {
    return (
        <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.75, ease: 'easeOut' }}>
            <h2>Contact.</h2>

            <section className="contact">
                <img src={require('../assets/business_card.jpg')} className='contact-background' alt='business card' />

                <div className="contact-form">
                    <form action="https://formspree.io/f/xlekaobw" method="POST">

                        <label>First Name</label>
                        <input type="text" id="fname" name="firstname" placeholder="Your name.." />

                        <label>Last Name</label>
                        <input type="text" id="lname" name="lastname" placeholder="Your last name.." />

                        <label>Email</label>
                        <input type="email" name="email" id="email" placeholder="Your email.." />

                        <label>Message</label>
                        <textarea id="message" name="message" placeholder="Write something.."
                        ></textarea>

                        <input type="submit" value="Send" />

                    </form>
                </div>
            </section>
        </motion.main>
    );
}

export default Contact;