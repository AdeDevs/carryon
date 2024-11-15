import { useState } from "react";

function NavPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [linkActive, isLinkActive] = useState(null);

  const toggleCart = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="navigation">
      <nav>
        <h1>
          {" "}
          <button>
            <br />
          </button>
          <button className="special"></button> Carryon
        </h1>
        <ul className="desk-menu">
          <li>About</li>
          <li>Agenda</li>
          <li>Partnership</li>
          <li>Testimonial</li>
        </ul>
        <button className="contact">Contact Us</button>
        <span className="toggle-menu" onClick={toggleCart}>
          <ion-icon name="menu-outline" />
        </span>

        <div
          className={`overlay ${isMenuOpen ? "show" : ""}`}
          onClick={toggleCart}
        ></div>
        <div className={`hamburger-menu ${isMenuOpen ? "show" : ""}`}>
          <span className="toggle-menu">
            <ion-icon name="close-outline" onClick={toggleCart} />
          </span>
          <ul>
            <li
              className={linkActive === 0 ? "active" : ""}
              onClick={() => isLinkActive(0)}
            >
              About
            </li>
            <li
              className={linkActive === 1 ? "active" : ""}
              onClick={() => isLinkActive(1)}
            >
              Agenda
            </li>
            <li
              className={linkActive === 2 ? "active" : ""}
              onClick={() => isLinkActive(2)}
            >
              Partnership
            </li>
            <li
              className={linkActive === 3 ? "active" : ""}
              onClick={() => isLinkActive(3)}
            >
              Testimonial
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavPage;
