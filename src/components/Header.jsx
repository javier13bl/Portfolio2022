const Header = () => {
    return (
        <header className='sticky'>
            <div className='headerBg'>
                <div className='headerFlex wrapper'>
                    <nav className='navbar'>
                        <a href='#portafolio'>Portafolio</a>
                        <a href='#sobremi'>Javier Buitrago</a>
                        <a href='#contacto'>Contactar</a>
                    </nav>
                    <div className='headerText'>
                        <h1>Front-End</h1>
                        <span></span>
                        <h2>Developer</h2>
                        <a href='#portafolio'>Scroll &#129059;</a>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header