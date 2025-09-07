import React from "react";
import styles from "./style.module.css";

const ModalLogin = ({ show, onClose }) => {
    if (!show) return null; // modal tidak ditampilkan jika false

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal}>
                <button className={styles.closeBtn} onClick={onClose}>
                    &times;
                </button>
                <h2>Login</h2>
                <form>
                    <div className={styles.formGroup}>
                        <input type="email" placeholder="Email" required />
                    </div>
                    <div className={styles.formGroup}>
                        <input type="password" placeholder="Password" required />
                    </div>
                    <button type="submit" className={styles.btnLogin}>
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ModalLogin;