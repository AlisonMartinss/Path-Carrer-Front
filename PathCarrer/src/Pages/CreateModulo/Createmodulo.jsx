import styles from '../CreateModulo/Createmodulo.module.css'

import TXTinputP from '../../Components/TXTinputP/TXTinputP'
import TXTinputM from '../../Components/TXTinputM/TXTinputM'
import CabecalhoPadrao from '../../Components/Cabecalho/CabecalhoPadrao'
import Button from '../../Components/Button/Button'

function CreateModulo () {
    return (
        <main className={styles.main}>
            <header className={styles.header}>
                <CabecalhoPadrao/>
            </header>
            <form className={styles.form}>
                <div className={styles.moduloName}>
                    <TXTinputP
                    placeholder={"Digite o nome do modulo"}/>
                </div>

                <div className={styles.moduloDesc}>
                    <TXTinputM
                    placeholder={"Descreva o seu modulo"}/>
                </div>

                <div className={styles.Button}>
                    <Button
                    message={"Enviar"}/>
                </div>
            </form>
           
        </main>

    )
}

export default CreateModulo