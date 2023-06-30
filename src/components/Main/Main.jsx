import React from 'react';
import styles from './Main.module.css';



const Main = () => {
    return (
        <>
            <div className={styles.main}>
                <div className={styles.container}>


                    <div className={styles.block1}>
                       
                        <div className={styles.start}>  

                            <div className={styles.reqtbig}>
                                <div className={styles.lines}>
                                    <h4>КЛИНИНГОВЫЕ УСЛУГИ В РОСТОВЕ-НА-ДОНУ ДЛЯ КВАРТИР, ЧАСТНЫХ ДОМОВ, ОФИСОВ</h4>
                                </div>
                            </div>

                           <a href="#about"><div className={styles.reqtmin}>
                                <div className={styles.lines}>
                                    <p className={styles.noselect}>Подробнее</p>
                                </div>
                            </div></a> 


                        </div>    
                            
                    </div>


                    <div id='about' className={styles.block2}>
                        <div className={styles.inside2}>
                            <div className={styles.picture2}><img src={require('./forhero.png')} alt="" className={styles.forma}/></div>
                            
                            <div className={styles.bord}>
                                <div className={styles.textop}>
                                    <h1><div className={styles.opisanie1}>"КУПИДОН" Функционирует в сфере клининга с 2009 года в Ростове-на-Дону</div></h1>
                                    <h1><div className={styles.opisanie2}>У нас большой опыт в предоставлении клининговых услуг Обществам с Ограниченной Ответственностью, Индивидуальным Предпренимателям, Государственным организациям</div></h1>
                                    <h1><div className={styles.opisanie3}>Работаем с частными клиентами по договоренности и с эксклюзивными договорами.</div></h1>
                                </div>
                            </div>

                        </div>
                    </div>      


                    <div id='type' className={styles.block3}>
                        <div className={styles.inside3}>
                            <h1><div className={styles.type}>ВИДЫ РАБОТ</div></h1>
                            <div className={styles.cards}>
                                <div className={styles.card1}>
                                    <div className={styles.card1pict}><img src={require('./for1card.png')} alt="" /></div>
                                    <div className={styles.cn1}>
                                        <div className={styles.text1}>Квартиры</div>
                                        <p className={styles.card1op}>По договоренности</p>
                                        <p className={styles.cost}>Стоимость зависит от площади и сложности</p>
                                    </div>
                                    <a href=""><div className={styles.info1}>Подробнее</div></a>
                                </div>
                                <div className={styles.card2}>
                                    <div className={styles.card2pict}><img src={require('./for2card.png')} alt="" /></div>
                                    <div className={styles.cn2}>
                                        <div className={styles.text2}>Офисы</div>
                                        <p className={styles.card2op}>Ежедневно</p>
                                        <p className={styles.cost}>Стоимость зависит от площади и сложности</p>
                                    </div>
                                    <a href=""><div className={styles.info2}>Подробнее</div></a>
                                </div>
                                <div className={styles.card3}>
                                    <div className={styles.card3pict}><img src={require('./for3card.png')} alt="" /></div>
                                    <div className={styles.cn3}>
                                        <div className={styles.text3}>Остекления</div>
                                        <p className={styles.card3op}>Единорозаво</p>
                                        <p className={styles.cost}>Стоимость зависит от площади и сложности</p>
                                    </div>
                                    <a href=""><div className={styles.info3}>Подробнее</div></a>
                                </div>
                            </div>
                        </div>
                    </div>        
                </div>
            </div>
        </>


    )
}

export default Main