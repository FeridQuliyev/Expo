import React from 'react'
import style from "../Section3/Section3.module.css"
import image from "../image/expo9.png"
function Section3() {
    return (
        <div className={style.container}>
            <div className={style.cards}>
                <div className={style.cardimg}>
                    <img src={image} alt="img" />
                </div>
                <div className={style.card}>
                    <h1>We take a steps to build a successful business</h1>
                    <p>Content marketing is nothing but offering users value. It is not just about traffic minion consectetur adipiscing elitd do eiusmod tempor incididun.</p>
                    <div className={style.but}><button>Explore Us</button></div>
                </div>

            </div>
        </div>
    )
}

export default Section3