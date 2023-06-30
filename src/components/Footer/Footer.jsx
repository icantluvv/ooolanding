import React from 'react';
// import './Footer.module.css'
import styles from './Footer.module.css';
import tg from './tg.png'
import vk from './vk.png'


const Footer = () => {
    return (
        <>
            <div className={styles.footer}>
                {/* <div>
                    
                </div> */}
                <div className={styles.container}>
                    <div id='voice' className={styles.sources}>
                        <div className={styles.lines}>
                            <h4>Контакты</h4>
                            <p>Почта: cleanrostovkupidon@mail.ru</p>
                            <p className={styles.number}>Телефон: +7(919)895-72-73</p>
                        </div>

                        <div className={styles.lines}>
                            <h4>О нас</h4>
                            <a href="">
                                <p className={styles.docs}>Документы</p>
                            </a>
                            <a  href="">
                                <p  className={styles.structure}>Структура и органы управления организацией</p>
                            </a>
                            <a  href="">
                                <p  className={styles.osnova}>Основные сведения</p>
                            </a>
                        </div>

                        <div className={styles.lines}>
                            <h4>Поддержка</h4>
                            <a href="">
                                <p className={styles.question}>Частые вопросы клиентов</p>
                            </a>
                            <a href="https://vk.com/topic-221175644_49161768">
                                <p>Обратная связь</p>
                            </a>
                        </div>

                        <div className={styles.lines}>
                            <h4>Мессенджеры</h4>
                            <div className={styles.socialmedia}>
                                <a href="https://vk.com/cleanrostovkupidon"><p><img src={vk} alt="" className={styles.vk}></img></p></a>
                                <a href="https://t.me/vvhatineed"><p><img src={tg} alt="" className={styles.tg}></img></p></a>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </>

    )
}

export default Footer