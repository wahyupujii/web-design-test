import React, { useState } from "react";
import styles from "./style.module.css";

const Navbar = ({ onLoginClick }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className={styles.navbar}>
            {/* Logo */}
            <div className={styles.logo}>
                <div className={styles.logoShape}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 
              10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 
              8-8 8 3.6 8 8-3.6 8-8 8z" />
                    </svg>
                </div>
                <span>HOME</span>
            </div>

            {/* Menu */}
            <ul className={`${styles.menu} ${isOpen ? styles.open : ""}`}>
                <li><a href="#about">ABOUT</a></li>
                <li><a href="#pricing">PRICING</a></li>
                <li><a href="#contact">CONTACT</a></li>
                <li className={styles.mobileLogin}><button onClick={onLoginClick}>LOGIN</button></li>
            </ul>

            {/* Desktop Login */}
            <button
                className={styles.loginBtn}
                onClick={onLoginClick}
            >LOGIN</button>

            {/* Hamburger */}
            <div className={styles.hamburger} onClick={() => setIsOpen(!isOpen)}>
                <div className={isOpen ? styles.barOpen : styles.bar}></div>
                <div className={isOpen ? styles.barOpen : styles.bar}></div>
                <div className={isOpen ? styles.barOpen : styles.bar}></div>
            </div>
        </nav>
    )
}

export default Navbar;