import styles from '../PostComment/PostComment.module.css'

// ==== Componentes ====

import TXTinputM from '../TXTinputM/TXTinputM';
import ButtonIMG from '../ButtonIMG/ButtonIMG';
import { useEffect, useState } from 'react';

function PostComment({ onClose, inputTXT, buttonON, maxlength }) {
    const [nCaracteres, SetnCaracteres] = useState("");
    const [restantes, SetRestantes] = useState(maxlength);
    const [waring, setWaring] = useState(false); // Agora é um estado

    const verify = () => {
        if (nCaracteres.length >= 5) { // Corrigida a condição
            setWaring(false); // Se atender ao requisito, remove o aviso
            alert("PIPOCA COM SAL")
            buttonON();
            alert("PIPOCA COM SAL 2")
        } else { 
            setWaring(true); // Agora ativa o aviso corretamente
        }
    };

    useEffect(() => {
        SetRestantes(maxlength - nCaracteres.length); // Calculando caracteres restantes
    }, [nCaracteres, maxlength]); // O efeito deve ser executado quando nCaracteres ou maxlength mudarem

    return (
        <div className={styles.main}>
            {waring === true ? (
                <div className={`${styles.waring} ${styles.txt}`}>
                    Número de caracteres mínimos não atendido
                </div>
            ):null}
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
                    placeholder={"Digite aqui o seu comentário"}
                    onChange={(e) => {inputTXT(e); SetnCaracteres(e.target.value)}}
                    maxLength={maxlength} // Corrigido para "maxLength"
                />
            </div>
            <div className={`${styles.cRestantes} ${styles.txt}`}>
                Caracteres restantes: {restantes}
            </div>
            <div className={styles.Button}>
                <ButtonIMG
                    iconV={"BsSendFill"}
                    icon_style={"evenConstStyleBlue"}
                    handleClick={verify} // Removido `(e) =>`
                    title={"Postar !"}
                />
            </div>
        </div>
    );
}

export default PostComment;