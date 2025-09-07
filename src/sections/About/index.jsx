import React from "react";
import styles from "./style.module.css";

const About = () => {
    return (
        <section id="about" className={styles.about}>
            <div className={styles.container}>
                <div className={styles.text}>
                    <h2>About Us</h2>
                    <p>
                        Kami adalah tim yang berfokus pada pengembangan website. 
                        Misi kami adalah membantu bisnis berkembang dengan
                        memanfaatkan teknologi modern.
                    </p>
                    <p>
                        Dengan pengalaman dalam strategi perencanaan produk,
                        kami memastikan setiap proyek disesuaikan dengan kebutuhan
                        klien kami.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
