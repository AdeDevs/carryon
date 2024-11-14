import { useState } from "react";

function NavPage() {
    const [showMenu, setShowMenu] = useState(false)
    const [activeButton, isActiveButton] = useState(false)

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }
    const toggleActiveButton = () => {
        isActiveButton(!activeButton);
    }
    return (
        <div className="navigation">
            <nav>
                <h1> <button><br /></button><button className="special"></button> Carryon</h1>
                <ul className="desk-menu">
                    <li>About</li>
                    <li>Agenda</li>
                    <li>Partnership</li>
                    <li>Testimonial</li>
                </ul>
                <button className={`contact ${activeButton ? "active" : ""}`} onClick={toggleActiveButton}>Contact Us</button>
                    <span className="toggle-menu" onClick={toggleMenu}>
                        <ion-icon name="menu-outline" />
                    </span>
                    <div className={`overlay ${showMenu ? "show" : ""}`} onClick={toggleMenu}></div>
                <div className={`hamburger-menu ${showMenu ? "show" : ""}`}>
                    <span className="toggle-menu" onClick={toggleMenu}>
                        <ion-icon name="close-outline" />
                    </span>
                    <ul>
                        <li>About</li>
                        <li>Agenda</li>
                        <li>Partnership</li>
                        <li>Testimonial</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default NavPage;