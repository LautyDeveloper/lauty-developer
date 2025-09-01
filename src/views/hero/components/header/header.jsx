import React from 'react'
import './header.css'

export default function Header() {
    return (
        <header>
            <h1><b className="accent-color">Lauty</b>Dev.</h1>
            <nav>
                <ul>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Proyectos</a></li>
                    <li><a href="#">Sobre Mi</a></li>
                </ul>
            </nav>
            <div className="header-buttons">
                <button>I</button>
                <button>I</button>
            </div>
        </header>
    )
}