import React from 'react'
import { NavLink } from 'react-router-dom'
import style from "../Footer/Footer.module.css"
import image from "../image/expo.webp"

function Footer() {
    return (
        <div className={style.container}>
            <footer>
                <div className={style.foots} >
                    <div className={style.foot}>
                        <img src={image} alt="img" />
                        <p>Land behold it created good saw after she'd Our set living. Signs midst dominion creepeth morning laboris nisi ufsit aliquip.</p>
                        <div className={style.icons}>
                            <i class="fa-brands fa-twitter-square"></i>
                            <i class="fa-brands fa-facebook-square"></i>
                            <i class="fa-brands fa-linkedin"></i>
                            <i class="fa-brands fa-pinterest-square"></i>
                        </div>
                    </div>
                    <div className={style.foot}>
                        <h1>Navigation</h1>
                        <div className={style.link}>
                            <div><NavLink to={"/"}>Home</NavLink></div>
                            <div><NavLink to={"/about"}>About</NavLink></div>
                            <div><NavLink to={"/services"}>Services</NavLink></div>
                            <div><NavLink to={"/contact"}>Contact</NavLink></div>
                        </div>
                    </div>
                    <div className={style.foot}>
                        <h1>Services</h1>
                        <div className={style.link}>
                            <div><NavLink to={"/"}>Blackforest</NavLink></div>
                            <div><NavLink to={"/about"}>Bodhubon</NavLink></div>
                            <div><NavLink to={"/services"}>Rongdhonu</NavLink></div>
                            <div><NavLink to={"/contact"}>Meghrong</NavLink></div>
                        </div>
                    </div>
                    <div id={style.contact} className={style.foot}>
                        <h1>Contact Us</h1>
                        <div id={style.map}><p>76/A, Green Lane, Dhanmondi, NYC</p></div>
                        <div className={style.tel}><a href="tel:+10 (78) 738-9083">+10 (78) 738-9083</a></div>
                    </div>
                </div>
                <div className={style.text}>
                    <span>Copyright ©2022 All rights reserved | This template is made with</span><span className={style.heard}><i class="fa-solid fa-heart"></i></span><span>by Colorlib</span>
                </div>
            </footer>
        </div>
    )
}

export default Footer