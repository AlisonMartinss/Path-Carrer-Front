import styles from '../Loby/Loby.module.css'

// =-=-=-=-=- Componentes =-=-=-=-=- //

import CabecalhoPadrao from '../../Components/Cabecalho/CabecalhoPadrao'
import SearchInput from '../../Components/SearchInput/SearchInput'
import WindowText from '../../Components/WindowText/WindowText'
import Button from '../../Components/Button/Button'
import Window from '../../Components/window/Window'

// =-=-=-=-= Icones =-=-=-=-=- //




function Loby () {
    return (
        <main className={styles.main}>
            <header className={styles.header}><CabecalhoPadrao txt1={"Suporte"}txt2={"Pesquisar com base na categoria"}txt3={"Seus Paths"}/></header>
            <div className={styles.searchArea}>
               <div className={styles.SearchInputArea}><SearchInput/></div>
            </div>
            <div className={styles.core}>
             <div className={styles.classes}>

                <div className={styles.daysWeek}>

                  <div className={styles.day}>
                    <Button 
                    class={"day"}
                    message={"All"}/>
                  </div>

                  <div className={styles.day}>
                    <Button 
                    class={"day"}
                    message={"Dom"}/>
                  </div>

                  <div className={styles.day}>
                    <Button 
                    class={"day"}
                    message={"Seg"}/>
                  </div>

                  <div className={styles.day}>
                    <Button 
                    class={"day"}
                    message={"Ter"}/>
                  </div>

                  <div className={styles.day}>
                    <Button 
                    class={"day"}
                    message={"Qua"}/>
                  </div>

                  <div className={styles.day}>
                    <Button 
                    class={"day"}
                    message={"Qui"}/>
                  </div>

                  <div className={styles.day}>
                    <Button 
                    class={"day"}
                    message={"Sex"}/>
                  </div>

                  <div className={styles.day}>
                    <Button 
                    class={"day"}
                    message={"Sab"}/>
                  </div>

                </div>

                <div className={styles.classes_focus}>
                 <div className={styles.preWindow}>
                    <Window
                    title={"Titulo exemplar 01 "}
                    iconnnn={"IA"}
                    relative={"31/45"}/>
                 </div>
                 <div className={styles.preWindow}>
                    <Window
                      title={"Titulo exemplar 02 "}
                      iconnnn={"ING"}
                      relative={"31/45"}/>
                 </div>
                 <div className={styles.preWindow}>
                    <Window
                    title={"Titulo exemplar 03 "}
                    iconnnn={"FIN"}
                    relative={"31/45"}/> 
                 </div>
                 <div className={styles.preWindow}>
                   <Window
                   title={"Titulo exemplar 04 "}
                   iconnnn={"MKT"}
                   relative={"31/45"}/>
                 </div>
                 <div className={styles.preWindow}>
                   <Window
                   title={"Titulo exemplar 05 "}
                   iconnnn={"POR"}
                   relative={"31/45"}/>
                 </div>
                </div>
             </div>
                
             <div className={styles.shortMensage}>
               <div className={styles.messageBody}>
                <div className={`${styles.messageTitle} ${styles.txtOver}`}> 
                  De<strong className={`${styles.strong}`}>Você</strong>para <strong className={`${styles.strong}`}>Você</strong>
                </div>
                <div className={styles.messageCore}>
                  <div className={styles.WindowText}> <WindowText classModel={"main"} classStyle={"mainStyle1"} txt={"254 para textos grandes"}/></div>
                   <div className={styles.WindowText}><WindowText classModel={"main"} classStyle={"mainStyle1"} txt={"Fiquei todo empanzinado"}/></div>
                </div>
               </div>
             </div>
         </div>

        </main>

    )
}

export default Loby