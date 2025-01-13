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
                <div className={styles.boxInput}>
                <BoxInput
                    message={"Selecione uma categoria que se encaixa no seu Path:"}
                    v1={"MAT"} txt1={"Matemática"}
                    v2={"POR"} txt2={"Português"}
                    v3={"ING"} txt3={"Inglês"}
                    v4={"TI"}  txt4={"Programação"}
                    v5={"FIN"} txt5={"Educação Financeira"}

                    v6={"EMP"} txt6={"Empreendedorismo"}
                    v7={"DES"} txt7={"Design"}
                    v8={"MAK"} txt8={"Marketing"}
                    v9={"IA"}  txt9={"Inteligencia Artificial"}  
                 />
                </div>
                <div className={styles.inputM}>
                <div className={styles.paraM}>
                <TXTinputM
                    message={`Digite tags que seus potenciais viwers usariam para procurar seu conteudo Ex:`}
                    placeholder={"#Desenvolvimento pessoal   #Marketing Digital ..."}
                    />
                </div>
                </div>
               
                </div>
                <div className={styles.inputsG_core}>
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