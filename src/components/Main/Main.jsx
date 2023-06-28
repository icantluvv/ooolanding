import React from 'react';
import styles from './Main.module.css';



const Main = () => {
    return (
        <>
            <div className={styles.main}>
                <div className={styles.container}>


                    <div className={styles.block1}>
                        {/* <div className={styles.picture}><img className={styles.image} src={require('./back.png')}/></div> */}
                        
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
                            <div className={styles.table}><img src={require('./form.png')} className={styles.stol} alt="" /></div>
                            <div className={styles.table}><img src={require('./formphones.png')} className={styles.stol1} alt="" /></div>
                            <div className={styles.table}><img src={require('./formmini.png')} className={styles.stol2} alt="" /></div>          
                        </div>
                    </div>        
                </div>
            </div>
        </>


    )
}

export default Main