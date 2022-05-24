import React from 'react'
import style from "../Section1/Section1.module.css"
import image from "../image/expo1.webp"
function Section1() {
    return (
        <div className={style.body}>
            <div className={style.container}>
                <div className={style.cards}>
                    <div className={style.card}>
                        <h1>Build audience and grow your brand</h1>
                        <p>Content marketing is nothing but offering users value.
                            It is not just about traffic minion customers.</p>
                        <div className={style.but}><button>Explore Us</button></div>
                    </div>
                    <div className={style.cardimg}>
                        <img src={image} alt="img" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section1