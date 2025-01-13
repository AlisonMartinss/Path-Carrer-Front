import styles from '../Class/Class.module.css'

import CabecalhoPadrao from '../../Components/Cabecalho/CabecalhoPadrao'
import WindowText from '../../Components/WindowText/WindowText'
import ButtonIMG from '../../Components/ButtonIMG/ButtonIMG'

function Class (props){
    return (
        <main className={styles.main}>
            <header className={styles.header}><CabecalhoPadrao/></header>
            <div className={styles.core}>
                <div className={styles.menLateral}>

                  <div className={styles.moduleName}>{props.nomeDoModulo}</div>

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
                  </div>

                  <div className={styles.backGround}></div>
                </div>

                <div className={styles.conteudo}>
                    <div className={styles.tela}>
                      <div className={styles.editButton}><ButtonIMG iconi={"RiPencilRuler2Fill"} iconi2={"iconn"}/></div>

                      <iframe className={styles.iframe} src={props.srcVideo} frameborder="0"></iframe>

                    </div>

                    <p className={styles.desc}>{props.message}</p>
                    
                </div>
            </div>
        </main>

    )
}

export default Class