import styles from '../Class/Class.module.css'

import CabecalhoPadrao from '../../Components/Cabecalho/CabecalhoPadrao'
import WindowText from '../../Components/WindowText/WindowText'

function Class (){
    return (
        <main className={styles.main}>
            <header className={styles.header}><CabecalhoPadrao/></header>
            <div className={styles.core}>
                <div className={styles.menLateral}>
                    <div className={styles.moduleName}>NOME DO MODULO</div>
                    <div className={styles.classContainer}>
                        
                     <div className={styles.class}><WindowText 
                       classModel={"mainModel2"} 
                       classStyle={"mainStyle2"}/>
                     </div>
                     <div className={styles.class}><WindowText 
                       classModel={"mainModel2"} 
                       classStyle={"mainStyle2"}/>
                     </div>
                     <div className={styles.class}><WindowText 
                       classModel={"mainModel2"} 
                       classStyle={"mainStyle2"}/>
                     </div>
                     <div className={styles.class}><WindowText 
                       classModel={"mainModel2"} 
                       classStyle={"mainStyle2"}/>
                     </div>
                     <div className={styles.class}><WindowText 
                       classModel={"mainModel2"} 
                       classStyle={"mainStyle2"}/>
                     </div>
                     <div className={styles.class}><WindowText 
                       classModel={"mainModel2"} 
                       classStyle={"mainStyle2"}/>
                     </div>
                     <div className={styles.class}><WindowText 
                       classModel={"mainModel2"} 
                       classStyle={"mainStyle2"}/>
                     </div>
                     <div className={styles.class}><WindowText 
                       classModel={"mainModel2"} 
                       classStyle={"mainStyle2"}/>
                     </div>
                     <div className={styles.class}><WindowText 
                       classModel={"mainModel2"} 
                       classStyle={"mainStyle2"}/>
                     </div>
                     <div className={styles.class}><WindowText 
                       classModel={"mainModel2"} 
                       classStyle={"mainStyle2"}/>
                     </div>
                     <div className={styles.class}><WindowText 
                       classModel={"mainModel2"} 
                       classStyle={"mainStyle2"}/>
                     </div>
                     <div className={styles.class}><WindowText 
                       classModel={"mainModel2"} 
                       classStyle={"mainStyle2"}/>
                     </div>
                     <div className={styles.class}><WindowText 
                       classModel={"mainModel2"} 
                       classStyle={"mainStyle2"}/>
                     </div>
                     <div className={styles.class}><WindowText 
                       classModel={"mainModel2"} 
                       classStyle={"mainStyle2"}/>
                     </div>
                     <div className={styles.class}><WindowText 
                       classModel={"mainModel2"} 
                       classStyle={"mainStyle2"}/>
                     </div>
                    </div>
                    

                </div>
                <div className={styles.conteudo}>
                    <div className={styles.tela}></div>
                    <div className={styles.desc}></div>
                </div>
            </div>
        </main>

    )
}

export default Class