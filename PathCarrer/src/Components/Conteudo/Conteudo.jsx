import styles from '../Conteudo/Conteudo.module.css'
import ButtonIMG from '../ButtonIMG/ButtonIMG'



function Conteudo ({img,adjectives=[],PathName,Category,onClick}){
    return (
        <div onClick={onClick} className={styles.main}>
            <div className={styles.thumbMail}>
                <img className={styles.img} src={img} alt="" />
            </div>
            <div className={styles.coreArea}>
                <div className={styles.title_category}>
                    <div className={`${styles.title} ${styles.txt1}`}>{PathName}</div>
                    <div className={`${styles.category} ${styles.txt2}`}>{Category}</div>
                </div>
                <div className={`${styles.adjectivesArea}`}>                        
                        <div className={styles.adjectiveLines}>
                            <div className={`${styles.ajdLine} ${styles.txt3}`}>
                                {adjectives.slice(0,3).map((element) => (
                                    <div className={`${styles.adjective} ${styles[element.color]}`}>
                                        {element.name}
                                    </div>
                                ))}
                            </div>
                            <div className={`${styles.ajdLine} ${styles.txt3}`}>
                                {adjectives.slice(3,5).map((element) => (
                                    <div className={`${styles.adjective} ${styles[element.color]}`}>
                                        {element.name}
                                    </div>
                                ))}
                            </div>
                        </div>                       
                </div>
            </div>
        </div>
    )
}

export default Conteudo