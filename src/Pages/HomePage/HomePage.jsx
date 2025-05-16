import styles from '../HomePage/HomePage.module.css'
import { MdArrowDropDown } from "react-icons/md";
import Button from '../../Components/Button/Button';

// Midias

import expla02 from '../../../src/assets/Midias/PNGs/images/expla02.png'
import DinamicadoPath from  '../../assets/Midias/SVGs/DinamicaDoPath.svg'
import progressaoHP from '../../../src/assets/Midias/PNGs/images/progressaoHP.gif'
import Comments from '../../../src/assets/Midias/PNGs/images/Comments.png'
import premissas_01 from '../../../src/assets/Midias/PNGs/images/premissas_01.png'
import premissas_02 from '../../../src/assets/Midias/PNGs/images/premissas_02.png'
import premissas_03 from '../../../src/assets/Midias/PNGs/images/premissas_03.png'


// Componentes

import CabecalhoHomePage from '../../Components/CabecalhoHomePage/CabecalhoHomePage'
import { useNavigate } from 'react-router';

function HomePage () {
    const navigate = useNavigate()
    const explanation = 
    [
        {
            GifON:false,
            title:
            `Encontre as melhores aulas em um só lugar!`,
            txtMain:
            `
             Sabemos como pode ser desafiador encontrar o conteúdo certo no meio de tantas 
             opções. Por isso, reunimos as melhores aulas sobre cada assunto, organizadas de forma
             clara e acessível.

             Aqui, você aprende com pessoas que já estiveram no seu lugar,que entendem suas
             dúvidas e desafios. Isso é possível graças aos paths. Trilhas estruturadas em
             módulos e aulas para guiar seu aprendizado de forma prática e eficiente.
            `,
            motivaton:`Descubra, aprenda e avance no seu caminho!`,
            img:DinamicadoPath,
            widthTitle:0.68*("Encontre as melhores aulas em um só lugar!").length
        },
        {
            GifON:false,
            title:
            `Conteudo reunido em um só lugar !`,
            txtMain:
            `
             A gente sabe como é cansativo procurar bons materiais na internet e acabar 
             perdido no meio de tanta informação espalhada. E se tudo já estivesse organizado
             para você em um só lugar?

             No Path to Carrer, os melhores materais estão reunidos em um só lugar.
            `,
            motivaton:"",
            img:expla02,
            widthTitle:0.68*("Conteudo reunido em um só lugar !").length
        },
        {
            GifON:true,
            title:
            `Acompanhe seu progresso e mantenha a motivação!`,
            txtMain:
            `
             Sabemos que aprender algo novo pode parecer um caminho longo, mas visualizar seu
             avanço faz toda a diferença. 

            No Path to Career, você acompanha em tempo real quantos % já concluiu do seu path,
            ajudando a manter o foco e a motivação. 

            Cada módulo concluído é um passo a mais em direção ao seu objetivo.
            `,
            motivaton:`Ver seu progresso crescer a cada dia faz com que o 
aprendizado se torne mais leve e recompensador.`,

            img:progressaoHP,
            widthTitle:0.80*("Encontre as melhores aulas em um só lugar!").length
        },
        {
            GifON:false,
            title:
            `Acompanhe seu progresso e mantenha a motivação!`,
            txtMain:
            `
             Sabemos que aprender algo novo pode parecer um caminho longo, mas visualizar seu
             avanço faz toda a diferença. 

            No Path to Career, você acompanha em tempo real quantos % já concluiu do seu path,
            ajudando a manter o foco e a motivação. 

            Cada módulo concluído é um passo a mais em direção ao seu objetivo.
            `,
            motivaton:`Ver seu progresso crescer a cada dia faz com que o 
aprendizado se torne mais leve e recompensador.`,

            img:Comments,
            widthTitle:0.80*("Encontre as melhores aulas em um só lugar!").length
        }
    ]
    const premissas = 
    [
        {
            title:"Paths estruturados",
            message:"Aprenda com trilhas organizadas por quem já passou pelo mesmo caminho que você.",
            img:premissas_01
        },
        {
            title:"Progresso visível",
            message:"Acompanhe seu avanço em cada path e mantenha a motivação em alta.",
            img:premissas_02
        },
        {
            title:"Comunidade ativa",
            message:"Tire dúvidas, troque ideias e cresça junto com quem está na mesma jornada.",
            img:premissas_03
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
                        <img className={styles.img_png} src="../../../src/assets/Midias/PNGs/images/thumbpath.png" alt="" />
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
                        
                        <div className={`${styles.preTitle}`}>{element.title}</div>
                        <div className={`${styles.preTxt}`}>{element.message}</div>
                      </div>
                    ))}
                </div>
                {explanation.map((element) => 
                !element.GifON ? (
                    <div className={styles.explanationArea}>
                        <div className={styles.expla_01}>
                            <div className={`${styles.expla_title} ${styles.realoc}`}>
                            <div style={{ width: `${element.widthTitle}vw` }} className={styles.decorativo01}></div>
                            <div className={styles.expla_title_main}>{element.title}</div> 
                            </div>
                            <div className={`${styles.expla_main}`}>
                            {element.txtMain}
                            </div>
                            <strong className={`${styles.strong} ${styles.realoc}`}>{element.motivaton}</strong>
                            <div className={styles.line}></div>
                        </div>

                        <img className={styles.img} src={element.img} alt="" />
                    </div>
                ) : 
                <div className={styles.explanationArea}>
                    <div className={styles.expla_01_a}>
                            <div className={`${styles.expla_title} ${styles.realoc}`}>
                                
                                <div className={styles.expla_title_main}>{element.title}</div>
                                <div style={{ width: `${element.widthTitle}vw` }} className={styles.decorativo01}></div>
                            </div>
                            <div className={`${styles.expla_main_a}`}>
                             {element.txtMain}
                            </div>
                            <strong className={`${styles.strong} ${styles.realoc}`}>{element.motivaton}</strong>
                            <div className={styles.line}></div>         
                    </div>
                    <img className={styles.img_V2} src={element.img} alt="" />
                    <div className={styles.enfeite_b}>100%</div>
                </div>
                )}
                <div className={styles.CTOend}>
                    <div className={styles.CTOend_txt}>E muito mais!</div>
                    <div className={styles.CTOend_button}>
                        <Button
                        class="darkBlue"
                        message="Crie sua conta!"
                        func={() => {localStorage.setItem("CreateAccount",true),navigate('/Login')}}
                        />
                    </div>
                    <img className={styles.CTOend_deco} src={"../../../src/assets/Midias/PNGs/images/setaA.svg"} alt="" />
                </div>
            </div>
        </div>

    )
}

export default HomePage