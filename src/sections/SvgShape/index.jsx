import React from "react";
import styles from "./style.module.css";

const SvgShape = () => {
    return (
        <div className={styles.svgShape}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
                <path fill="#0099ff" fillOpacity="1" d="M0,192L40,176C80,160,160,128,240,106.7C320,85,400,75,480,96C560,117,640,171,720,197.3C800,224,880,224,960,192C1040,160,1120,96,1200,58.7C1280,21,1360,11,1400,5.3L1440,0L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
            </svg>
        </div>
    );
}

export default SvgShape;
