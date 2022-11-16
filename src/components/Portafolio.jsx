import poke from '../imgs/poke.png'
import nasa from '../imgs/nasa.png'
import carbo from '../imgs/carbo.png'

const Portafolio = () => {
    const nueve = [1,2,3,4,5,6,7,8,9];
    const siete = [1,2,3,4,5,6,7];
    return (
        <section className='portafolio sticky' id='portafolio'>
            <div className='portBody wrapper'>
                <h1>Portafolio</h1>
                <div className='proyectos'>
                    <div className='proyecto'>
                        <div className='pImgs'>
                            <div className='parrafo'>
                                {nueve.map( i => (
                                    <p key={i}>Carbo Web Carbo Web</p>
                                ))}
                            </div>
                            <div className='sobreParrafo'>
                                {siete.map( i => (
                                    <p key={i}>Carbo Web Carbo Web</p>
                                ))}
                            </div>
                            <img src={carbo} alt='Pokédex Preview'/>
                        </div>
                        <div className='pInfo'>
                            <h2>Carbo Web</h2>
                            <h3>Propuesta de Diseño para Empresa de Carbón</h3>
                            <p>HTML | CSS | React JS | react-router-dom | Links</p>
                            <div className='pBtns'>
                                <a href='https://github.com/javier13bl/CarboWeb' target='_blank' title='Código'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-github" width="30" height="30" viewBox="0 0 24 24" strokeWidth="2" stroke="#000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                        <polyline points="7 8 3 12 7 16" />
                                        <polyline points="17 8 21 12 17 16" />
                                        <line x1="14" y1="4" x2="10" y2="20" />
                                    </svg>
                                </a>
                                <a href='https://carboexco.netlify.app/' target='_blank' title='Página Web'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-github" width="30" height="30" viewBox="0 0 24 24" strokeWidth="2" stroke="#FFF" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                        <line x1="20" y1="4" x2="12" y2="12" />
                                        <polyline points="12 4 20 4 20 12" />
                                        <path d="M18 16v2a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h2" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='proyecto'>
                        <div className='pImgs'>
                            <div className='parrafo'>
                                {nueve.map( i => (
                                    <p key={i}>Nasa App Nasa App</p>
                                ))}
                            </div>
                            <div className='sobreParrafo'>
                                {siete.map( i => (
                                    <p key={i}>Nasa App Nasa App</p>
                                ))}
                            </div>
                            <img src={nasa} alt='Pokédex Preview'/>
                        </div>
                        <div className='pInfo'>
                            <h2>Nasa App</h2>
                            <h3>Foto Astronómica del Día (APOD) - NasaAPI</h3>
                            <p>HTML | CSS | React JS | react-router-dom | react-navigate</p>
                            <div className='pBtns'>
                                <a href='https://github.com/javier13bl/Nasa_APOD_App' target='_blank' title='Código'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-github" width="30" height="30" viewBox="0 0 24 24" strokeWidth="2" stroke="#000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                        <polyline points="7 8 3 12 7 16" />
                                        <polyline points="17 8 21 12 17 16" />
                                        <line x1="14" y1="4" x2="10" y2="20" />
                                    </svg>
                                </a>
                                <a href='https://gleeful-sprite-be6768.netlify.app/' target='_blank' title='Página Web'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-github" width="30" height="30" viewBox="0 0 24 24" strokeWidth="2" stroke="#FFF" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                        <line x1="20" y1="4" x2="12" y2="12" />
                                        <polyline points="12 4 20 4 20 12" />
                                        <path d="M18 16v2a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h2" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='proyecto'>
                        <div className='pImgs'>
                            <div className='parrafo'>
                                {nueve.map( i => (
                                    <p key={i}>Pokédex App Pokédex</p>
                                ))}
                            </div>
                            <div className='sobreParrafo'>
                                {siete.map( i => (
                                    <p key={i}>Pokédex App Pokédex</p>
                                ))}
                            </div>
                            <img src={poke} alt='Pokédex Preview'/>
                        </div>
                        <div className='pInfo'>
                            <h2>Poke App</h2>
                            <h3>Aplicación Informativa Pokédex - PokeAPI</h3>
                            <p>HTML | CSS | React JS | react-router-dom | react-paginate</p>
                            <div className='pBtns'>
                                <a href='https://github.com/javier13bl/Pokedex_React' target='_blank' title='Código'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-github" width="30" height="30" viewBox="0 0 24 24" strokeWidth="2" stroke="#000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                        <polyline points="7 8 3 12 7 16" />
                                        <polyline points="17 8 21 12 17 16" />
                                        <line x1="14" y1="4" x2="10" y2="20" />
                                    </svg>
                                </a>
                                <a href='https://bucolic-heliotrope-3fba7f.netlify.app/' target='_blank' title='Página Web'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-github" width="30" height="30" viewBox="0 0 24 24" strokeWidth="2" stroke="#FFF" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                        <line x1="20" y1="4" x2="12" y2="12" />
                                        <polyline points="12 4 20 4 20 12" />
                                        <path d="M18 16v2a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h2" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portafolio