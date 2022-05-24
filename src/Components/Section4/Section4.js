import React from 'react'
import style from "../Section4/Section4.module.css"
import image from "../image/expo10.svg"
function Section4() {
    return (
        <div className={style.bgcolor}>
            <div className={style.container}>
                <div className={style.text}>
                    <h1>How we can help</h1>
                    <p>Content marketing is nothing but offering users value. It is not just about traffic minion consectetur adipiscing elitd do eiusmod tempor incididun.</p>
                </div>
                <div className={style.cards}>
                    <div className={style.card}>
                        <div className={style.icons}>
                            <div className={style.icon}><img src={image} alt="img" /></div>
                            <div className={style.icon}>
                                <h1>Digital Marketing</h1>
                                <p>The words you use in your written communications speak volumes. Dozens of organisations already reap the benefits of having an experienced.</p>
                            </div>
                        </div>
                    </div>
                    <div className={style.card}>
                        <div className={style.icons}>
                            <div className={style.icon}><img src={image} alt="img" /></div>
                            <div className={style.icon}>
                                <h1>Social media marketing</h1>
                                <p>The words you use in your written communications speak volumes. Dozens of organisations already reap the benefits of having an experienced.</p>
                            </div>
                        </div>
                    </div>
                    <div className={style.card}>
                        <div className={style.icons}>
                            <div className={style.icon}><img src={image} alt="img" /></div>
                            <div className={style.icon}>
                                <h1>Content create</h1>
                                <p>The words you use in your written communications speak volumes. Dozens of organisations already reap the benefits of having an experienced.</p>
                            </div>
                        </div>
                    </div>
                    <div className={style.card}>
                        <div className={style.icons}>
                            <div className={style.icon}><img src={image} alt="img" /></div>
                            <div className={style.icon}>
                                <h1>Web design</h1>
                                <p>The words you use in your written communications speak volumes. Dozens of organisations already reap the benefits of having an experienced.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section4