import React, { useState } from 'react';
import Modal from '../Modal';

const Projects: React.FC = () => {

    const [modal1Open, setModal1Open] = useState(false);
    const [modal2Open, setModal2Open] = useState(false);
    const [modal3Open, setModal3Open] = useState(false);

    const openModal1 = () => {
        setModal1Open(true);
    };

    const openModal2 = () => {
        setModal2Open(true);
    };

    const openModal3 = () => {
        setModal3Open(true);
    };

    const closeModal1 = () => {
        setModal1Open(false);
    };

    const closeModal2 = () => {
        setModal2Open(false);
    };

    const closeModal3 = () => {
        setModal3Open(false);
    };


    return (
        <>
            <main>
                <h2>Projects.</h2>

                <section className="projects">

                    <div onClick={openModal1} className="project styleliving">

                        <img src={require('../assets/styleliving.jpg')} className='image' alt='styleliving' />
                        <div className="middle">
                            <div className="text">
                                <h2>Style & Living</h2>
                                <p className="d-flex flex-wrap">
                                    <span className="d-block mb-1">HTML5</span>
                                    <span className="d-block mb-1">Sass &amp; CSS</span>
                                    <span className="d-block mb-1">Context</span>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div onClick={openModal2} className="project coffeegame">

                        <img src={require('../assets/coffeegame.jpg')} className='image' alt='coffeegame' />
                        <div className="middle">
                            <div className="text">
                                <h2>Click The Cup Game</h2>
                                <p className="d-flex flex-wrap">
                                    <span className="d-block mb-1">HTML5</span>
                                    <span className="d-block mb-1">Sass &amp; CSS</span>
                                    <span className="d-block mb-1">Typescript</span>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div onClick={openModal3} className="project bortakvall">
                        <img src={require('../assets/bortakvall.jpg')} className='image' alt='bortakvall' />
                        <div className="middle">
                            <div className="text">
                                <h2>Bortakväll</h2>
                                <p className="d-flex flex-wrap">
                                    <span className="d-block mb-1">HTML5</span>
                                    <span className="d-block mb-1">Sass &amp; CSS</span>
                                    <span className="d-block mb-1">Typescript</span>
                                </p>
                            </div>
                        </div>
                    </div>

                </section>
            </main>
            <Modal isOpen={modal1Open} onClose={closeModal1} title="Style & Living" content={<p>This is Modal 1 content.</p>} />
            <Modal isOpen={modal2Open} onClose={closeModal2} title="The Coffee Game" content={<img src="/path/to/image.png" alt="Modal 2" />} />
            <Modal
                isOpen={modal3Open}
                onClose={closeModal3}
                title="Bortakväll"
                content={
                    <form>
                        <label>Name:</label>
                        <input type="text" />

                        <label>Email:</label>
                        <input type="email" />

                        <button type="submit">Submit</button>
                    </form>
                }
            />
        </>
    );
}

export default Projects;