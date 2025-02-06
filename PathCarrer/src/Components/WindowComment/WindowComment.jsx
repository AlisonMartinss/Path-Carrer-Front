import styles from '../WindowComment/WindowComment.module.css'
import RelatedComponents from '../RelatedComponents/RelatedComponents';


function WindowComment (handleClick){

    return (
        <main className={styles.main}>
            <div className={styles.core}>
                <div className={styles.userName_AND_relative}>
                    <div className={`${styles.userName} ${styles.txtOver}`}>@AlisonSoares</div>
                    <div className={styles.relative}>100%</div>
                </div>
                <div className={styles.comment}></div>
            </div>
            <div className={styles.likes}>
                <RelatedComponents 
                icon_Aa={"AiFillLike"} 
                ClasseAfterA={"classeAfterAa"}
                icon_Bb={"AiFillDislike"}
                ClasseAfterB={"classeAfterBb"}
                buttonActive={(e) => ("")}
                mensagemA={"444"}
                />                             
            </div>
        </main>
    )
}

export default WindowComment