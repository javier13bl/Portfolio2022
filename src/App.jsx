import Header from './components/Header'
import Marquesina from './components/Marquesina'
import Portafolio from './components/Portafolio'
import About from './components/About'
import Contact from './components/Contact'
import GoTop from './components/GoTop'

const App = () => {
    return (
        <>
            <Header/>
            <main>
                <Marquesina>
                    &nbsp;HTML &#9474; CSS &#9474; JavaScript &#9474; React JS &#9474; SQL &#9474; Python &#9474; Java &#9474; IELTS C1/B2 &#9474; HTML &#9474; CSS &#9474; JavaScript &#9474; React JS &#9474; SQL &#9474; Python &#9474; Java &#9474; IELTS C1/B2 &#9474;
                </Marquesina>
                <Portafolio />
                <About/>
                <Contact/>
            </main>
            <footer>
                <div className='footer wrapper'>
                    <p>&copy; Todos los derechos reservados, 2022.</p>
                    <a href='https://github.com/javier13bl' target='_blank'>Desarrollado por Javier Buitrago</a>
                </div>
            </footer>
            <GoTop/>
        </>
    )
}

export default App