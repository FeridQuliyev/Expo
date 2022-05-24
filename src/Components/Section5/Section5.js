import React from 'react'
import style from "../Section5/Section5.module.css"
import image from "../image/expo11.jpeg"
function Section5() {
  return (
    <div className={style.container}>
    <div className={style.cards}>
        <div className={style.card}>
            <h1>We are here to help you for better solutions</h1>
            <p>Content marketing is nothing but offering users value. It is not just about traffic minion consectetur adipiscing elitd do eiusmod tempor incididun.</p>
            <div className={style.but}><button>Explore Us</button></div>
        </div>
        <div className={style.cardimg}>
            <img src={image} alt="img" />
        </div>
    </div>
</div>
  )
}

export default Section5