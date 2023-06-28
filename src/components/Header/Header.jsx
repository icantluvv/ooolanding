import React from 'react';
import styles from './Header.module.css';
// import logo from './logo.png';


const Header = () => {
    return (
        <>
            <div className={styles.header}>
                <div className={styles.container}>
                    <div className={styles.sources}>
                        <div className={styles.logocont}>
                            <a href="" className={styles.logo}><img src="./assets/images/logo.png"></img></a>
                        </div>

                        <div className={styles.hr}>
                            <div className={styles.line}></div>
                        </div>

                        <div className={styles.burger}>
                            <a href='#about' className={styles.about}><h4>О НАС</h4></a>
                            <a href='#type' className={styles.types}><h4>ВИДЫ РАБОТ</h4></a>
                            <a href='#voice' className={styles.contacts}><h4>СВЯЗЬ</h4></a>
                            <a href='https://vk.com/topic-221175644_49161768' className={styles.os}><h4>ОТЗЫВЫ</h4></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header