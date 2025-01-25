import styles from '../WindowComment/WindowComment.module.css'
import ButtonIMG from '../ButtonIMG/ButtonIMG';
import RelatedComponents from '../RelatedComponents/RelatedComponents';


function WindowComment (){

    return (
        <main className={styles.main}>
            <div className={styles.core}>
                <div className={styles.img_AND_relative}>
                    <div className={styles.img}></div>
                    <div className={styles.relative}></div>
                </div>
                <div className={styles.comment}></div>
            </div>
            <div className={styles.likes}>
                <RelatedComponents 
                icon_Aa={"GrLike"} 
                ClasseAfterA={"classeAfterAa"}
                icon_Bb={"GrDislike"}
                ClasseAfterB={"classeAfterBb"}
                buttonActive={(e) => ("")}
                />                             
            </div>
        </main>
    )
}

export default WindowComment