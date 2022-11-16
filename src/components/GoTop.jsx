import {useState} from 'react';

const GoTop = () => {
    const [visible, setVisible] = useState(false);

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    const showButton = () => {
        if (window.pageYOffset > 200) {
            setVisible(true)
        } else {
            setVisible(false)
        }
    }
    window.addEventListener('scroll', showButton)

    return (
        <button
            className={visible ? 'gotop-button gotop-visible' : 'gotop-button'}
            onClick={scrollUp}
            title='Ir Arriba'
        >
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevrons-up" width="40" height="40" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <polyline points="7 11 12 6 17 11" />
                <polyline points="7 17 12 12 17 17" />
            </svg>
        </button>
    )
}

export default GoTop