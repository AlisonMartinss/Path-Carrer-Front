import styles from '../CreatePath/CreatePath.module.css'

import CabecalhoPadrao from '../../Components/Cabecalho/CabecalhoPadrao'
import TXTinputP from '../../Components/TXTinputP/TXTinputP'
import TXTinputM from '../../Components/TXTinputM/TXTinputM'
import BoxInput from '../../Components/BoxInput/BoxInput'
import Button from '../../Components/Button/Button'

function CreatePath () {
    const option = [
        {valueA: 'FIN',txt: 'Educação financeira'},
        {valueA: 'IA' ,txt: 'Inteligencia artificial'},
        {valueA: 'MRK',txt: 'Marketing'},
        {valueA: 'POR',txt: 'Portugues'},
        {valueA: 'MAT',txt: 'Matematica'}
    ];
    return (
        <main className={styles.main}>
         <header className={styles.header}>
            <CabecalhoPadrao/>
         </header>
            <div className={styles.core}>
            <form className={styles.form}>
               <div className={styles.inputA}>
                  <div className={styles.title_input}><TXTinputP/></div>

                  <div className={`${styles.txtover} ${styles.ctoA}`}>
                     Selecione uma <strong className={styles.strong}>categoria</strong> que se encaixa no seu path:
                  </div>

                  <div className={styles.categoriaInput}><BoxInput/></div>

                  <div className={`${styles.txtover} ${styles.ctoA}`}>
                     Selecione cinco <strong className={styles.strong}>adjetivos</strong> que se encaixam no seu path:
                  </div>

                  <div className={styles.adjetivosInput}>
                     <div className={styles.boxAdjetivo}><BoxInput/></div>
                     <div className={styles.boxAdjetivo}><BoxInput/></div>
                     <div className={styles.boxAdjetivo}><BoxInput/></div>
                     <div className={styles.boxAdjetivo}><BoxInput/></div>
                     <div className={styles.boxAdjetivo}><BoxInput/></div>
                  </div>

                  <div className={styles.tags}>
                     <div className={styles.inputTag}>
                      <div className={styles.button}><Button class={"button"}/></div>
                      <div className={styles.inputTag_core}><TXTinputP/></div>
                     </div>
                     <div className={styles.showTags}>

                     </div>
                  </div>
               </div>



               
              
            </form> 
            </div>
        </main>
    )
}
export default CreatePath