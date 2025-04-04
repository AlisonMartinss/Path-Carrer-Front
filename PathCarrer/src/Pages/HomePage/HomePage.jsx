import styles from '../HomePage/HomePage.module.css'


// Componentes

import CabecalhoHomePage from '../../Components/CabecalhoHomePage/CabecalhoHomePage'

function HomePage () {
    return (
        <div className={styles.main}>
            <div className={styles.core}>
                <CabecalhoHomePage/>

                <div className={styles.hp1}>
                    <div className={styles.CtoTXT}>
                        <div className={`${styles.slogan} ${styles.txtSlogan}`}>Aprenda de forma estruturada, sem complicação</div>
                        <div className={`${styles.proposito} ${styles.txtProposito}`}>
                            Paths organizam o conhecimento em módulos e aulas para facilitar sua jornada de aprendizado.
                        </div>
                    </div>

                    <div className={styles.backForm}>
                        <img className={styles.img_svg} src="../../../src/assets/Midias/SVGs/retangle.svg" alt="" />
                    </div>

                    <div className={styles.PathThumb}>
                        <img className={styles.img_png} src="../../../src/assets/Midias/SVGs/thumbpath.png" alt="" />
                    </div>

                </div>

                <div className={styles.hp2}>
                    

                </div>
            </div>
        </div>

    )
}

export default HomePage