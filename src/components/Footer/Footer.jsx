import React from 'react';
// import './Footer.module.css'
import styles from './Footer.module.css';
import tg from './tg.png'
import vk from './vk.png'
import yt from './yt.png'


const Footer = () => {
    return (
        <div className={styles.footer}>
            {/* <div>
                
            </div> */}
            <div className={styles.container}>
                <div className={styles.sources}>
                    <div className={styles.lines}>
                        <h4>Контакты</h4>
                        <p>Почта: cleanrostovkupidon@mail.ru</p>
                        <p>Телефон: +7(919)895-72-73</p>
                    </div>

                    <div className={styles.lines}>
                        <h4>О нас</h4>
                        <a href="">
                            <p>Документы</p>
                        </a>
                        <a href="">
                            <p>Структура и органы управления организацией</p>
                        </a>
                        <a href="">
                            <p>Основные сведения</p>
                        </a>
                    </div>

                    <div className={styles.lines}>
                        <h4>Поддержка</h4>
                        <a href="">
                            <p>Частые вопросы клиентов</p>
                        </a>
                        <a href="">
                            <p>Обратная связь</p>
                        </a>
                    </div>

                    <div className={styles.lines}>
                        <h4>Социальные сети</h4>
                        <div className={styles.socialmedia}>
                            <p><img src={vk} alt="" className={styles.vk}></img></p>
                            <p><img src={yt} alt="" className={styles.yt}></img></p>
                            <p><img src={tg} alt="" className={styles.tg}></img></p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Footer