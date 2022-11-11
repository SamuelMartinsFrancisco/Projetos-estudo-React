import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

function Menu() {
    const [openMenu, setOpenMenu] = useState(false);
    let screenWidth = window.screen.width;

    return (
        <nav className={openMenu === false || 
                        screenWidth >= 750 ? 
                        'menu' : 'menu opened'
        }>
            <MenuButton openMenu={openMenu} setOpenMenu={setOpenMenu} />
            <ol>
                <h3>Projetos</h3>
                <MenuLink setOpenMenu={setOpenMenu} 
                          path="/clock" 
                          name="Clock" />
                <MenuLink setOpenMenu={setOpenMenu} 
                          path="/exercises-generator" 
                          name="Exercises Generator" />
                <MenuLink setOpenMenu={setOpenMenu} 
                          path="/forms" 
                          name="Forms" />
                <MenuLink setOpenMenu={setOpenMenu} 
                          path="/jogo-da-velha" 
                          name="Jogo da Velha" />
                <MenuLink setOpenMenu={setOpenMenu} 
                          path="/simple-keyboard" 
                          name="Simple Keyboard" />
            </ol>
        </nav>
    );
}

function MenuButton(props) {
    return (
        <button onClick={() => {
            props.setOpenMenu((state) => !state);
        }}> 
            <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M6 36v-3h36v3Zm0-10.5v-3h36v3ZM6 15v-3h36v3Z"/></svg> 
        </button>
    );
}

function MenuLink(props) {
    return (
        <li onClick={() => {
            props.setOpenMenu((state) => !state)
        }}>
            <Link to={props.path}> {props.name} </Link>
        </li>
    )
}

export default Menu;