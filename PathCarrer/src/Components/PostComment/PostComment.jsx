import styles from '../PostComment/PostComment.module.css'

// ==== Componentes ====

import TXTinputM from '../TXTinputM/TXTinputM';
import ButtonIMG from '../ButtonIMG/ButtonIMG';
import { useEffect, useState } from 'react';

function PostComment({ onClose, inputTXT, buttonON, maxlength }) {
    const [nCaracteres, SetnCaracteres] = useState("");
    const [restantes, SetRestantes] = useState(maxlength);
    const [waring, setWaring] = useState(false);

    const verify = () => {
        if (nCaracteres.length >= 5) {
            setWaring(false);
            buttonON();
        } else { 
            setWaring(true);
        }
    };

    useEffect(() => {
        SetRestantes(maxlength - nCaracteres.length);
    }, [nCaracteres, maxlength]);

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
                    maxLength={maxlength}
                />
            </div>
            <div className={`${styles.cRestantes} ${styles.txt}`}>
                Caracteres restantes: {restantes}
            </div>
            <div className={styles.Button}>
                <ButtonIMG
                    iconV={"BsSendFill"}
                    icon_style={"evenConstStyleBlue"}
                    handleClick={verify}
                    title={"Postar !"}
                />
            </div>
        </div>
    );
}

export default PostComment;