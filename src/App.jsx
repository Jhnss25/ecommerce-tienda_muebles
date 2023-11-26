import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer'
import Inicio from './pages/Inicio';
import Nav from './components/layout/Nav';
import Nosotros from './pages/nosotros';
import Tienda from './pages/tienda';
import Blog from './pages/blog';
import EntradaBlog from './components/EntradaBlog';
import Galeria from './pages/galeria';
import Contacto from './pages/contacto';

function App() {

    return (
        <BrowserRouter>
            <Header />
            <Nav />

            <Routes>
                <Route path='/' element={ <Inicio /> } />
                <Route path='/nosotros' element={ <Nosotros /> } />
                <Route path='/tienda' element={ <Tienda /> } />
                <Route path='/blog' element={ <Blog /> } />
                <Route path='/entrada' element={ <EntradaBlog /> } />
                <Route path='/galeria' element={ <Galeria /> } />
                <Route path='/contacto' element={ <Contacto /> } />
            </Routes>
            
            <Footer />
        </BrowserRouter>
    )
}

export default App;