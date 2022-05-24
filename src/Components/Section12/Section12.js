import React from 'react'
import style from "../Section12/Section12.module.css"
import { useState } from 'react';
function Section12() {
    const [state, setState] = useState({
        name: "",
        email: "",
        mobile: "",
        message: "",
    })
    const { message, name, email, subject, } = state
    function inputHandler(e) {
        const i = e.target.value
        setState({
            ...state,
            [e.target.name]: i
        })
    }
    return (
        <div className={style.container}>
            <div className={style.form}>
                <form action="https://formsubmit.co/feridquliyev137@gmail.com" method="POST">
                    <h1 id={style.get}>Get in Touch</h1>
                    <div className={style.cards}>
                        <div className={style.card}>
                            <div className={style.textarea}>
                                <textarea
                                    placeholder='Enter message'
                                    onChange={inputHandler}
                                    value={message}
                                    name="message"
                                    type="text"
                                    required
                                />
                            </div>
                            <div className={style.inputs}>
                                <div className={style.input}>
                                    <input
                                        placeholder='Enter your name'
                                        onChange={inputHandler}
                                        value={name}
                                        name="name"
                                        type="text"
                                        required
                                    />
                                </div>
                                <div className={style.input}>
                                    <input
                                        placeholder='Enter email adress'
                                        onChange={inputHandler}
                                        value={email}
                                        type="email"
                                        name="email"
                                        required
                                    />
                                </div>
                            </div>
                            <div className={style.sub}>
                                <input
                                    placeholder='Enter Subject'
                                    onChange={inputHandler}
                                    value={subject}
                                    type="text"
                                    name="subject"
                                    required
                                />
                            </div>
                            <div className={style.but}><button type='submit'>SEND</button></div>
                        </div>
                        <div className={style.card}>
                            <div className={style.icons}>
                                <div className={style.icon}>
                                    <i class="fa-solid fa-house-chimney"></i>
                                </div>
                                <div className={style.icon}>
                                    <h1>Buttonwood, California.</h1>
                                    <p>Rosemead, CA 91770</p>
                                </div>
                            </div>
                            <div className={style.icons}>
                                <div className={style.icon}>
                                <i class="fa-solid fa-mobile-screen-button"></i>
                                </div>
                                <div className={style.icon}>
                                    <h1>+1 253 565 2365</h1>
                                    <p>Mon to Fri 9am to 6pm</p>
                                </div>
                            </div>
                            <div className={style.icons}>
                                <div className={style.icon}>
                                <i class="fa-solid fa-envelope"></i>
                                </div>
                                <div className={style.icon}>
                                    <h1>support@colorlib.com</h1>
                                    <p>Send us your query anytime!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Section12