import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo.png';
import './Menu.css'
import Button from '../Button';
import {LogoImage, MenuWrapper} from './style.js'
//import ButtonLink from './components/ButtonLink';

function Menu() {
    return (
    <MenuWrapper className="Menu">
        <Link to="/home">
            <LogoImage src={Logo} alt="Logo ~inspirado~ na Netflix" />   
        </Link>

        <Button as={Link} className="ButtonLink" to="/cadastro/video">
            Novo Vídeo
        </Button>
    </MenuWrapper>
    );
}

export default Menu;