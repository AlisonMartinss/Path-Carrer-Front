import styles from '../HomePage/HomePage.module.css'
import { MdArrowDropDown } from "react-icons/md";
import img from '../../assets/Midias/PNGs/images/expla01.png'


// Componentes

import CabecalhoHomePage from '../../Components/CabecalhoHomePage/CabecalhoHomePage'

function HomePage () {
    const explanation = 
    [
        {
            title:
            `Encontre as melhores aulas em um só lugar!`,
            txtMain:
            `
             Sabemos como pode ser desafiador encontrar o conteúdo certo no meio de tantas opções.
             Por isso, reunimos as melhores aulas sobre cada assunto, organizadas de forma clara 
             e acessível.

             Aqui, você aprende com pessoas que já estiveram no seu lugar,que entendem suas dúvidas
             e desafios. Isso é possível graças aos paths. Trilhas estruturadas em módulos e aulas para
             guiar seu aprendizado de forma prática e eficiente.
            `,
            motivaton:`Descubra, aprenda e avance no seu caminho!`,
            img:'../../../src/assets/Midias/PNGs/images/expla01.png'
        },
        {
            title:
            `Conteudo reunido em um só lugar !`,
            txtMain:
            `
             A gente sabe como é cansativo procurar bons materiais na internet e acabar perdido no meio
             de tanta informação espalhada. E se tudo já estivesse organizado para você em um só lugar?
             No Path to Carrer, os melhores materais estão reunidos em um só lugar.
            `,
            motivaton:"",
            img:'../../../src/assets/Midias/PNGs/images/expla02.png'
        }
    ]
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
                {explanation.map((element) => (
                <div className={styles.explanationArea}>
                    <div className={styles.expla_01}>
                        
                        <div className={`${styles.expla_title} ${styles.realoc}`}>
                          <div className={styles.decorativo01}></div>
                          <div className={styles.expla_title_main}>{element.title}</div> 
                        </div>
                        <div className={`${styles.expla_main}`}>
                          {element.txtMain}
                        </div>
          
                        <strong className={`${styles.strong} ${styles.realoc}`}>{element.motivaton}</strong>
                    </div>

                    <img className={styles.img} src={element.img} alt="" />
                </div>

                ))}
      
            </div>
        </div>

    )
}

export default HomePage