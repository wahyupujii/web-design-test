import React from "react";
import styles from "./style.module.css";

import hero from "../../assets/hero.svg";

const Hero = () => {
    return (
        <section className={styles.hero}>
            <p className={styles.heroText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
            </p>

            <blockquote className={styles.quote}>
                " Excepteur sint occaecat cupidatat non proident "
            </blockquote>

            <div className={styles.illustration}>
                <img
                    // src="https://cdn-icons-png.flaticon.com/512/201/201564.png"
                    src={hero}
                    alt="illustration"
                />
            </div>
        </section>
    );
}

export default Hero;
