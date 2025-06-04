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
import setaA from '../../../src/assets/Midias/PNGs/images/setaA.svg'
import thumbpath from '../../../src/assets/Midias/PNGs/images/estudante_HP.png'
import virtudes from '../../../src/assets/Midias/PNGs/images/virtudesGG.svg'
import ApresentacaoHP01 from '../../../src/assets/Midias/PNGs/images/apresentacaoHP01.png'
import ApresentacaoHP02 from '../../../src/assets/Midias/PNGs/images/ensinamento.png'





// Componentes

import CabecalhoHomePage from '../../Components/CabecalhoHomePage/CabecalhoHomePage'
import { useNavigate } from 'react-router-dom';
function HomePage () {
    const navigate = useNavigate()

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
                        <div className={`${styles.slogan} ${styles.txtSlogan}`}>
                            <div className={styles.strg_A}>Cursos completos com vídeos do <strong className={styles.strg_B}>YouTube</strong></div>
                            <div>organizados por quem quer <strong className={styles.strg_C}>ensinar,</strong></div>
                            <div>acessíveis pra quem quer <strong className={styles.strg_D}>aprender.</strong></div>
                        </div>
                    </div>

                    <div className={styles.PathThumb}>
                        <img className={styles.img_png} src={thumbpath} alt="Estudante sentada estudando no laptop" />
                    </div>

                    <div className={styles.flowNav}>
                        <img className={styles.img_png} src={virtudes} alt="Estudante sentada estudando no laptop" />
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
                <div className={styles.contentMain}>
                    <div className={styles.content_A}>
                        <div className={styles.titleAccessoryB}></div>
                        <div className={`${styles.contentTitle} ${styles.txtHp2title}`}>Encontre as melhores aulas em um só lugar!</div>
                        <div className={`${styles.contentMainCore} ${styles.txtHp2txt}`}>
                            Já ficou perdido tentando aprender algo com <strong>vídeos soltos no YouTube?</strong>
                            A nossa plataforma organiza isso pra você. Aqui, pessoas como você,
                            curiosas, generosas e apaixonadas por aprender, organizam vídeos <strong>gratuitos </strong>
                            do YouTube em cursos <strong>completos,</strong> com começo, meio e fim.
                            Você não precisa pagar nada. Nem perder tempo procurando vídeo por vídeo.
                        </div>
                        <div className={`${styles.contentCTO} ${styles.strong}`}>É só entrar, escolher um tema e começar a estudar.</div>
                    </div>
                    <div className={styles.img_Area}>
                        <img className={styles.img_png}  src={ApresentacaoHP01} alt="dinamica de funcionamento" />
                    </div>
                </div>

                <div className={styles.contentMain}>
                    <div className={styles.content_A}>
                        <div className={styles.titleAccessoryB}></div>
                        <div className={`${styles.contentTitle} ${styles.txtHp2title}`}>Compartilhe também o que você sabe !</div>
                        <div className={`${styles.contentMainCore} ${styles.txtHp2txt}`}>
                            E se um dia você quiser compartilhar o que sabe, também pode montar
                            <strong> seu próprio curso</strong> com vídeos já existentes. <strong className={styles.strg_E}>Fácil,</strong>
                            <strong className={styles.strg_F}> intuitivo</strong> <strong> e sem</strong><strong className={styles.strg_G}> complicação.</strong>
                            A gente acredita que aprender deve ser simples, acessível e feito junto.
                        </div>
                        <div className={`${styles.contentCTO} ${styles.strong}`}>
                           Por isso, criamos um espaço onde o conhecimento é compartilhado, organizado e gratuito.
                        </div>
                    </div>
                    <div className={styles.img_Area}>
                        <img className={styles.img_png}  src={ApresentacaoHP02} alt="dinamica de funcionamento" />
                    </div>
                </div>

                <div className={styles.contentMain}>
                    <div className={styles.content_A}>
                        <div className={styles.titleAccessoryB}></div>
                        <div className={`${styles.contentTitle} ${styles.txtHp2title}`}>Acompanhe seu progresso e mantenha a motivação!</div>
                        <div className={`${styles.contentMainCore} ${styles.txtHp2txt}`}>
                           Sabemos que aprender algo novo pode parecer um caminho longo, mas <strong className={styles.strg_G}>visualizar seu
                           avanço faz toda a diferença.</strong> 

                            No Path to Career, você acompanha em tempo real <strong>quantos % já concluiu do seu path,
                            ajudando a manter o foco e a motivação. </strong>

                           Cada módulo concluído é um passo a mais em direção ao seu objetivo.
                        </div>
                        <div className={`${styles.contentCTO} ${styles.strong}`}>
                           Ver seu progresso crescer a cada dia faz com que o aprendizado se torne mais leve e recompensador.
                        </div>
                    </div>
                    <div className={styles.img_Area}>
                        <img className={styles.img_png}  src={progressaoHP} alt="dinamica de funcionamento" />
                    </div>
                    <div className={styles.enfeite_b}>100%</div>
                </div>

                 

                
                <div className={styles.CTOend}>
                    <div className={styles.CTOend_txt}>E muito mais!</div>
                    <div className={styles.CTOend_button}>
                        <Button
                        class="darkBlue"
                        message="Crie sua conta!"
                        func={() => {localStorage.setItem("CreateAccount",true),navigate('/Login')}}
                        />
                    </div>
                    <img className={styles.CTOend_deco} src={setaA} alt="Imagem de seta" />
                </div>
            </div>
        </div>

    )
}

export default HomePage