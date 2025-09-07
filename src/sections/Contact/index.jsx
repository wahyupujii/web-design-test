import React from "react";
import styles from "./style.module.css";

const Contact = () => {
    const dataInformation = [
        {
            label: "Email",
            value: "hello@example.com"
        },
        {
            label: "Phone",
            value: "+6281234567890"
        },
        {
            label: "Address",
            value: "Surabaya"
        },
    ]

    return (
        <section id="contact" className={styles.contact}>
            <div className={styles.container}>
                <div className={styles.info}>
                    <h2>Contact Us</h2>
                    <p>
                        Punya pertanyaan atau ingin bekerja sama?
                        Silakan hubungi kontak disamping.
                    </p>

                </div>
                <div className={styles.info}>
                    <ul>
                        {dataInformation.map((item, index) => (
                            <li key={index}><strong>{item?.label}:</strong> {item?.value}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Contact;
