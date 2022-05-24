import React from 'react'
import style from "../Section11/Section11.module.css"
function Section11() {
    return (
        <div className={style.container}>
            <div className={style.map}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48275.61252828682!2d-74.21537207055663!3d40.86691902344794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2zTnl1LVlvcmssIE55dSBZb3JrLCBBbWVyaWthIEJpcmzJmcWfbWnFnyDFnnRhdGxhcsSx!5e0!3m2!1saz!2s!4v1653304352003!5m2!1saz!2s" width="1000px" height="500px"   referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    )
}

export default Section11