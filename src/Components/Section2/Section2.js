import React from 'react'
import style from "../Section2/Section2.module.css"
import image1 from "../image/expo2.jpeg"
import image2 from "../image/expo3.jpeg"
import image3 from "../image/expo4.jpeg"
import image4 from "../image/expo5.jpeg"
import image5 from "../image/expo6.jpeg"
import image6 from "../image/expo7.jpeg"
function Section2() {
    return (
        <div className={style.container}>
            <div className={style.text}>
                <h1>Trusted by over 3,000 world’s leading companies</h1>
                <p>Content marketing is nothing but offering users value. It is not just about traffic minion consectetur adipiscing elitd do eiusmod tempor incididun.</p>
            </div>
            <div className={style.cards}>
                <div className={style.card}>
                    <img src={image1} alt="img" />
                </div>
                <div className={style.card}>
                    <img src={image2} alt="img" />
                </div>
                <div className={style.card}>
                    <img src={image3} alt="img" />
                </div>
                <div className={style.card}>
                    <img src={image4} alt="img" />
                </div>
                <div className={style.card}>
                    <img src={image5} alt="img" />
                </div>
                <div className={style.card}>
                    <img src={image6} alt="img" />
                </div>
            </div>
        </div>
    )
}

export default Section2