import styles from '../CreatePath/CreatePath.module.css'

import CabecalhoPadrao from '../../Components/Cabecalho/CabecalhoPadrao'
import TXTinputP from '../../Components/TXTinputP/TXTinputP'
import TXTinputM from '../../Components/TXTinputM/TXTinputM'
import BoxInput from '../../Components/BoxInput/BoxInput'
import Button from '../../Components/Button/Button'

function CreatePath () {
    return (
        <main className={styles.main}>
         <header className={styles.header}>
            <CabecalhoPadrao/>
         </header>
            <div className={styles.core}>
            <form className={styles.form}>
                <div className={styles.inputsP_core}>

                    <div className={styles.inputP}>

                     <TXTinputP
                     name={"name"}
                     id={"name"}
                     placeholder={"Crie um nome para seu Path"}/>

                    </div>
                    <div className={styles.categoria}>

                     <div className={`${styles.messageOver} ${styles.txtover}`}> 
                        Seleciona uma <strong className={styles.strong}>categoria</strong> que se encaixa no seu Path
                     </div>
                     <div className={styles.boxArea}>
                        <div className={styles.boxInput}>
                         <BoxInput/>
                        </div>
                        <div className={styles.boxInput}>
                         <BoxInput/>
                        </div>
                        <div className={styles.boxInput}>
                         <BoxInput/>
                        </div>
                        <div className={styles.boxInput}>
                         <BoxInput/>
                        </div>
                        <div className={styles.boxInput}>
                         <BoxInput/>
                        </div>
                     </div>

                    </div>
                
                    <div className={styles.inputM}>

                     <div className={`${styles.messageOver} ${styles.txtover}`}>
                        Digite <strong className={styles.strong}>tags</strong> que faz parte do seu conteudo
                     </div>
                     <div className={styles.paraM}>
                        <TXTinputM
                        placeholder={"#Desenvolvimento pessoal   #Marketing Digital ..."}/>
                     </div>

                    </div>
               
                </div>

                <div className={styles.inputsG_core}>
                    
                     <div className={`${styles.messageAdjetivos} ${styles.messageOver} ${styles.txtover}`}>
                        Selecione 5 <strong className={styles.strong}>categorias</strong>
                        que melhor se encaixa no seu <strong className={styles.strong}> Path</strong>
                     </div>

                     <div className={styles.adjetivos}>
                      <div className={styles.boxAdjetivos}>
                        <BoxInput/>
                      </div>
                      <div className={styles.boxAdjetivos}>
                        <BoxInput/>
                      </div>
                      <div className={styles.boxAdjetivos}>
                        <BoxInput/>
                      </div>
                      <div className={styles.boxAdjetivos}>
                        <BoxInput/>
                      </div>
                      <div className={styles.boxAdjetivos}>
                        <BoxInput/>
                      </div>
                     </div>

                     <div className={styles.inputsGG_core}>
                        <TXTinputM
                        placeholder={`Adicione uma descrição ao seu Path`}/>
                     </div>

                     <div className={styles.button}>
                        <Button
                        message={"Enviar"}
                        class={"button"}/>
                     </div>
                   
                    

                </div>
            </form> 
            </div>
        </main>
    )
}
export default CreatePath