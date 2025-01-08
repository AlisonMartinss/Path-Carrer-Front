import styles from '../CreateAulas/CreateAulas.module.css'

import CabecalhoPadrao from '../../Components/Cabecalho/CabecalhoPadrao'
import TXTinputP from '../../Components/TXTinputP/TXTinputP'
import TXTinputM from '../../Components/TXTinputM/TXTinputM'
import MessageIMG from '../../Components/messageIMG/messageIMG'
import Dicas from '../../Components/Dicas/Dicas'
import Button from '../../Components/Button/Button'

function CreateAulas (){
    return (
        <main className={styles.main}>
            <header className={styles.head}><CabecalhoPadrao/></header>

            <div className={styles.core}>

             <div className={styles.tut_1}>
               <Dicas class={"dir"} message={"Repare no indice que você está editando."}/>
               <Dicas class={"esq"} message={"Clique em salvar para salvar as edições feitas e editar a proxima aula."}/>
             </div>

             <form className={styles.core_1}>
               <div className={styles.recado}>Você está editando a aula de indice <strong className={styles.strong}> X</strong></div>
               <div className={`${styles.inputName} ${styles.overInput}`}><TXTinputP/></div>
               <div className={`${styles.inputLink} ${styles.overInput}`}><TXTinputP/></div>
               <div className={styles.inputDesc}><TXTinputM/></div>
               <div className={styles.Button}>
                <div className={styles.Buttonover}><Button message={"Enviar"} class="button"/>   </div>
                <div className={styles.Buttonover}><Button message={"Salvar"} class="Save"/>   </div>
               </div>
             </form>

             <div className={styles.tut_2}>
                <MessageIMG img={""} message={"Está com duvida de como lidar com essa etapa? Clique aqui"}/>
             </div>
                
            </div>

            

        </main>
    )
}

export default CreateAulas