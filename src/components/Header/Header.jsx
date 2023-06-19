import React from 'react';
import styles from './Header.module.css';


const Header = () => {
    return (
        <div>
            <header>
                <div className={styles.blocklogo}>
                    <a href='localhost:3000'><img src='/assets/images/logo.png' alt="logo" className={styles.logo}/></a>
                    
                    {/* <div className={styles.polosa}></div> */}
                </div>
                
                <div className={styles.blockpolosa}>
                    <div className={styles.polosa}></div>
                </div>
                
                <div className={styles.container2}>
                    <a href='localhost:3000'><div className={styles.about}>О НАС</div></a>
                    <a href='localhost:3000'><div className={styles.type}>ВИДЫ РАБОТ</div></a>
                    <a href='https://vk.com/cleanrostovkupidon'><div className={styles.contact}>КОНТАКТЫ</div></a>
                    <a href='https://vk.com/topic-221175644_49161768'><div className={styles.feedback}>ОТЗЫВЫ</div></a>
                </div>
            </header>
        </div>
    )
}

export default Header