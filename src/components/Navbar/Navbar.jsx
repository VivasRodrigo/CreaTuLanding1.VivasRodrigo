import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget';

function Navbar() {
return (
    <header>
        <nav className='nav-bar'>
            <p><img className='logo' src="./public/logo.png" alt="logopez" /></p>
            <ul className='nav-items'>
                <li>Inicio</li>
                <li>Productos</li>
                <li>Contacto</li>
            </ul>
            <CartWidget />
        </nav>
    </header>
    );
}

export default Navbar
