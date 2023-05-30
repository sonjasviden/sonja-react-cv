import { useForm } from '@formspree/react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function Contact() {
    const [state, handleSubmit] = useForm("xlekaobw");
    if (state.succeeded) {
        return (
            <div className='thanks-msg'>
                <h4>
                    <svg width="26" height="26" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.707 7.293a1 1 0 0 1 0 1.414L11.414 16a2 2 0 0 1-2.828 0l-3.293-3.293a1 1 0 1 1 1.414-1.414L10 14.586l7.293-7.293a1 1 0 0 1 1.414 0z" /></svg>
                    Message successfully sent</h4>
                <h2>Thank you!</h2>
                <p>I'll get back to you shortly</p>

                <div className="back-btn">
                    <a href="/home">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                            className="bi bi-arrow-left" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                        </svg>
                        <Link to="/">Go back to home page</Link>
                    </a>
                </div>
            </div>
        )
    }

    return (
        <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.75, ease: 'easeOut' }}>
            <h2>Contact.</h2>

            <section className="contact">
                <img src={require('../assets/business_card.jpg')} className='contact-background' alt='business card' />

                <div className="contact-form">
                    <form onSubmit={handleSubmit} action="https://formspree.io/f/xlekaobw" method="POST">

                        <label>First Name</label>
                        <input type="text" id="fname" name="firstname" placeholder="Your name.." required />

                        <label>Last Name</label>
                        <input type="text" id="lname" name="lastname" placeholder="Your last name.." required />

                        <label>Email</label>
                        <input type="email" name="email" id="email" placeholder="Your email.." required />

                        <label>Message</label>
                        <textarea id="message" name="message" placeholder="Write something.." required
                        ></textarea>

                        <button className="submit-btn" disabled={state.submitting}>
                            Send
                        </button>

                    </form>
                </div>
            </section>
        </motion.main>
    );
}

export default Contact;