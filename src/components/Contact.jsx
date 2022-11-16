import { useState, useRef } from 'react';

const Contact = () => {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [mensaje, setMensaje] = useState('');
    const [error, setError] = useState(false);
    const ref = useRef(null);
    const mailto = ref.current

    const handleSubmit = (e) => {
        e.preventDefault()
        if ([nombre, email, mensaje].includes('')) {
            setError(true)
            setTimeout(() => {
                setError(false)
            }, 5000);
            return
        }
        mailto.click()
        setError(false)
        setNombre('')
        setEmail('')
        setMensaje('')
    }

    return (
        <section className='contact sticky' id='contacto'>
            <a
                href={`mailto:javier13bl@gmail.com?subject=${nombre + ' - ' + email}&body=${mensaje}`}
                ref={ref}
                className='hidden'
            >mailto</a>
            <div className='contactBody wrapper'>
                <h1>Contactame</h1>
                <div className='contactInfo'>
                    <div className='contactForm'>
                        <h2>¡Me gustaria saber de ti!</h2>
                        {error ? (
                            <h3>Todos los campos son obligatorios</h3>
                        ) : (
                            <div className='col'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-github" width="25" height="25" viewBox="0 0 24 24" strokeWidth="2" stroke="#F23A6B" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <circle cx="12" cy="11" r="3" />
                                    <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                                </svg>
                                <h3>Colombia</h3>
                            </div>
                        )}
                        <form
                            onSubmit={handleSubmit}
                        >
                            <label htmlFor='nombre'>Nombre:</label>
                            <input
                                id='nombre'
                                type='text'
                                placeholder='Tu Nombre'
                                value={nombre}
                                onChange={(e) => setNombre(e.target.value)}
                            />
                            <label htmlFor='email'>Email:</label>
                            <input
                                id='email'
                                type='email'
                                placeholder='tu@empresa.com'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <label htmlFor='mensaje'>Mensaje:</label>
                            <textarea
                                as='textarea'
                                id='mensaje'
                                type='text'
                                value={mensaje}
                                onChange={(e) => setMensaje(e.target.value)}
                            />
                            <input
                                type='submit'
                                value='Enviar Mensaje'
                            />
                        </form>
                    </div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11183465.424364148!2d-79.72025135781595!3d5.034524526407237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e15a43aae1594a3%3A0x9a0d9a04eff2a340!2sColombia!5e0!3m2!1ses-419!2sco!4v1668031648854!5m2!1ses-419!2sco" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </section>
    )
}

export default Contact