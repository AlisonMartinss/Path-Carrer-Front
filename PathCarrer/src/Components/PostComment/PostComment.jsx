import styles from '../PostComment/PostComment.module.css'

// ==== Componentes ====

import TXTinputM from '../TXTinputM/TXTinputM';
import ButtonIMG from '../ButtonIMG/ButtonIMG';
import { useEffect, useState } from 'react';

function PostComment ({onClose,inputTXT,buttonON,maxlength}){
    const [nCaracteres,SetnCaracteres] = useState('')
    const [restantes,SetRestantes] = useState(0)

    useEffect(() => {
        console.log(nCaracteres); // Verificando o valor de nCaracteres
        SetRestantes(maxlength - nCaracteres.length); // Calculando caracteres restantes
    }, [nCaracteres, maxlength]); // O efeito deve ser executado quando nCaracteres ou maxlength mudarem
    return (
        <div className={styles.main}>
            <div className={styles.icon}>
                <ButtonIMG
                    iconV={"IoIosCloseCircle"}
                    icon_style={"evenConstStyle"}
                    handleClick={onClose}
                    title={"Fechar janela"}
                />
            </div>
            <div className={styles.inputTXT}>
                <TXTinputM
                    placeholder={"Digite aqui o seu comentario"}
                    onChange={(e) => {inputTXT(e); SetnCaracteres(e.target.value)}}
                    maxlength={maxlength}
                />
            </div>
            <div className={`${styles.cRestantes} ${styles.txt}`}>
                Caracteres restantes: {restantes}
            </div>
            <div className={styles.Button}>
                <ButtonIMG
                    iconV={"BsSendFill"}
                    icon_style={"evenConstStyleBlue"}
                    handleClick={buttonON}
                    title={"Postar !"}
                />
            </div>
        </div>
    )
}

export default PostComment;