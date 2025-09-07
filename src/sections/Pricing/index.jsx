import React from "react";
import styles from "./style.module.css";

const Pricing = () => {
    const pricingData = [
        {
            plan: "Basic",
            price: 9,
            features: ["✔ 1 User", "✔ 5 Projects", "✔ Email Support"],
            highlight: false,
        },
        {
            plan: "Pro",
            price: 29,
            features: ["✔ 5 Users", "✔ 20 Projects", "✔ Priority Support"],
            highlight: true,
        },
        {
            plan: "Enterprise",
            price: 99,
            features: ["✔ Unlimited Users", "✔ Unlimited Projects", "✔ 24/7 Support"],
            highlight: false,
        },
    ];

    return (
        <section className={styles.pricing}>
            <section id="pricing">
                <h2 className={styles.title}>Our Pricing</h2>
                <p className={styles.subtitle}>
                    Pilih paket yang sesuai dengan kebutuhanmu 🚀
                </p>

                <div className={styles.cards}>
                    {pricingData.map((data, index) => (
                        <div key={index} className={`${styles.card} ${data.highlight ? styles.highlight : ''}`}>
                            <h3>{data.plan}</h3>
                            <p className={styles.price}>${data.price}<span>/mo</span></p>
                            <ul>
                                {data.features.map((feature, i) => (
                                    <li key={i}>{feature}</li>
                                ))}
                            </ul>
                            <button className={styles.btn}>Choose Plan</button>
                        </div>
                    ))}
                </div>
            </section>
        </section>
    );
}

export default Pricing;
