import styles from '../HomePage/HomePage.module.css'
import { MdArrowDropDown } from "react-icons/md";


// Componentes

import CabecalhoHomePage from '../../Components/CabecalhoHomePage/CabecalhoHomePage'

function HomePage () {
    const premissas = 
    [
        {
            title:"Paths estruturados",
            message:"Aprenda com trilhas organizadas por quem já passou pelo mesmo caminho que você.",
            img:'../../../src/assets/Midias/PNGs/images/premissas_01.png'
        },
        {
            title:"Progresso visível",
            message:"Acompanhe seu avanço em cada path e mantenha a motivação em alta.",
            img:'../../../src/assets/Midias/PNGs/images/premissas_02.png'
        },
        {
            title:"Comunidade ativa",
            message:"Tire dúvidas, troque ideias e cresça junto com quem está na mesma jornada.",
            img:'../../../src/assets/Midias/PNGs/images/premissas_03.png'
        }
    ]
    return (
        <div className={styles.main}>
            <div className={styles.core}>
                <CabecalhoHomePage
                sobrenosClick={() => {document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' });}}/>

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

                    <MdArrowDropDown
                    className={styles.icon_arrow}/>

                </div>

                <div id="sobre" className={styles.hp2}>
                    {premissas.map((element) => (
                      <div  className={styles.pre01}>
                        <div className={styles.imageArea}>
                          <img className={styles.img_png} src={element.img} alt="" /> 
                        </div>
                        
                        <div className={`${styles.preTitle} ${styles.txtHp2title}`}>{element.title}</div>
                        <div className={`${styles.preTxt} ${styles.txtHp2txt}`}>{element.message}</div>
                      </div>
                    ))}
                </div>
            </div>
        </div>

    )
}

export default HomePage