import styles from '../WindowComment/WindowComment.module.css'
import { FaStar } from "react-icons/fa6";

function WindowComment (){

    return (
        <main className={styles.main}>
            <header className={styles.header}>
                
                <div className={styles.star_area}><FaStar className={styles.star_core}/></div>
                
            </header>
            <div className={styles.core}>
                <div className={styles.img_AND_relative}>
                    <div className={styles.img}></div>
                    <div className={styles.relative}></div>
                </div>
                <div className={styles.comment}></div>
            </div>
            <div className={styles.likes}>
                <div className={styles.like_area}>
                    <div className={styles.like_core}></div>
                </div>
                <div className={styles.deslike_area}>
                    <div className={styles.deslike_core}></div>
                </div>
            </div>
        </main>
    )
}

export default WindowComment