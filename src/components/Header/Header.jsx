import React, {Component} from 'react';
import styles from './Header.module.css';


const Header = () => {
    return (
        <div>
            <header>
                <div className={styles.container1}>
                   
                    <p className={styles.number} >+7(919)895-72-73</p>
                    <a href=''><img src='/assets/images/logo.png' alt="logo" className={styles.logo}/></a>
                    <div className={styles.mail}>cleanrostovkupidon@mail.ru</div>
                </div>
                



                <div className={styles.container2}>
                    <a href=''><div className={styles.about}>О НАС</div></a>
                    <a href=''><div className={styles.type}>ВИДЫ РАБОТ</div></a>
                    <a href=''><div className={styles.contact}>КОНТАКТЫ</div></a>
                    <a href=''><div className={styles.feedback}>ОТЗЫВЫ</div></a>
                </div>

            </header>
        </div>
    )
}

export default Header