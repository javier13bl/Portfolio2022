import cara from '../imgs/cara.png'
import cv from '../download/CV2022.pdf'
const About = () => {
    return (
        <section className='about sticky' id='sobremi'>
            <div className=' aboutBody wrapper'>
                <h1>Sobre mi</h1>
                <div className='aboutInfo'>
                    <div className='aboutLinks'>
                        <a href='https://www.linkedin.com/in/javier13bl/' target='_blank' title='LinkedIn'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-github" width="35" height="35" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#FFF" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <rect x="4" y="4" width="16" height="16" rx="2" />
                                <line x1="8" y1="11" x2="8" y2="16" />
                                <line x1="8" y1="8" x2="8" y2="8.01" />
                                <line x1="12" y1="16" x2="12" y2="11" />
                                <path d="M16 16v-3a2 2 0 0 0 -4 0" />
                            </svg>
                        </a>
                        <a href='https://github.com/javier13bl' target='_blank' title='GitHub'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-github" width="35" height="35" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#FFF" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                            </svg>
                        </a>
                        <a href='#contacto' title='E-mail'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-github" width="35" height="35" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#FFF" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <rect x="3" y="5" width="18" height="14" rx="2" />
                                <polyline points="3 7 12 13 21 7" />
                            </svg>
                        </a>
                    </div>
                    <div className='aboutText'>
                        <h2>Hola, soy Javier</h2>
                        <h4>Desarrollador Front-End Jr.</h4>
                        <p>Soy Ingeniero Civil, por eso mi fascinación en las Estructuras, la Sociedad y la Construcción. Pero mi <span>pasión por la programación</span> ha sido mayor.<br/><br/>El <span>desarrollo web</span> puso a mi disposición todo un ámbito creativo.<br/><br/>La industria digital avanza con una rapidez sin precedentes, por tanto busco expandirme y seguir mejorando a través del <span>estudio y práctica</span>.</p>
                        <a href={cv} target='_blank'>Descargar CV</a>
                    </div>
                    <div className='aboutPic'>
                        <img src={cara} alt='Imagen Rostro'/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About