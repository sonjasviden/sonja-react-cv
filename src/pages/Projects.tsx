import React from 'react';

const Projects: React.FC = () => {

    return (
        <main>
            <h2>Projects.</h2>

            <section className="projects">

                <div className="project styleliving">

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

                <div className="project coffeegame">

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

                <div className="project bortakvall">
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
    );
}

export default Projects;