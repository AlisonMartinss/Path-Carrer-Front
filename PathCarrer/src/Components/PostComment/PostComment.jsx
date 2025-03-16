import styles from '../PostComment/PostComment.module.css'

// ==== Componentes ====

import TXTinputM from '../TXTinputM/TXTinputM';
import Button from '../Button/Button';
import ButtonIMG from '../ButtonIMG/ButtonIMG';

function PostComment ({onClose,inputTXT,buttonON}){
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
                    onChange={inputTXT}
                />
            </div>
            <div className={styles.Button}>
                <Button
                    message={"Postar comentario"}
                    class={"button"}
                    func={buttonON}
                />
            </div>
        </div>
    )
}

export default PostComment;