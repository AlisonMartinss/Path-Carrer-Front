import styles from '../Comment/Comment.module.css'
import ButtonIMG from '../ButtonIMG/ButtonIMG'

// ==== Midias ====

import DefaultProfile  from '../../../src/assets/Midias/PNGs/images/DefaultProfile.png'

function Comment ({imgURL,comment,nickName,onClickIcon1,onClickIcon2,responseAction,nAnswers}){
    return (
        <div className={styles.main}>
            <div className={styles.perfilArea}>
                <img className={styles.img} src={imgURL !== null ? (imgURL):DefaultProfile} alt="Foto de perfil" />
            </div>
            <div className={`${styles.nickName} ${styles.txtover}`}>{`@${nickName}`}</div>
            
            <div className={styles.iconArea}>
                <div onClick={onClickIcon1} className={styles.icons}>
                    <ButtonIMG
                        iconV={"TiGroup"}
                        icon_style={"evenConstStyleBlue"}
                        title={"Respostas"}
                        handleClick={""}  
                    />
                    {nAnswers !== null ? (
                    <div className={`${styles.nAnswers} ${styles.txtover3}`}>{nAnswers}</div>
                    )
                    :null}
                   
                </div>

                {localStorage.getItem("UserName") === nickName ? 
                (
                    <div className={styles.iconTrash}>
                        <ButtonIMG
                            iconV={"HiOutlineTrash"}
                            icon_style={"evenConstStyleBlue"}
                            title={"Exluir Comentario"}
                            handleClick={onClickIcon2}  
                        />
                    </div>
                )
                :null}

            </div>
            {responseAction !== null ? (
             <div onClick={responseAction} className={`${styles.answerAction} ${styles.txtover}`}>
                responder
             </div>
            ):null}
            
            <div className={styles.commentMain}>
              <div className={`${styles.commentCore} ${styles.txtover2}`}>
                {comment}
              </div>              
            </div>

        </div>

    )
}

export default Comment