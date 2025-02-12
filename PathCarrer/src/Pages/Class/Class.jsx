import styles from '../Class/Class.module.css'

import CabecalhoPadrao from '../../Components/Cabecalho/CabecalhoPadrao'
import WindowText from '../../Components/WindowText/WindowText'
import ButtonIMG from '../../Components/ButtonIMG/ButtonIMG'
import ClassComponent from '../../Components/ClassComponent/ClassComponent'
import { useState } from 'react'

function Class (){
    const [videoURL,setvideoURL] = useState("L4skN3uWqAg");
    const [videoZ,setVideoZ] = useState("https://www.youtube.com/embed/"+{videoURL});
    const [classes,Setclasses] = useState([
      { 
        title: "Titulo 01",
      },
      { 
        title: "Titulo 02",
      },
      { 
        title: "Titulo 03",
      },
      { 
        title: "Titulo 04",
      },
      { 
        title: "Titulo 05",
      },
      { 
        title: "Titulo 06",
      },
      { 
        title: "Titulo 07",
      },
      { 
        title: "Titulo 08",
      },
      { 
        title: "Titulo 09",
      },
      { 
        title: "Titulo 10",
      },
      { 
        title: "Titulo 10",
      },
      { 
        title: "Titulo 10",
      },
      { 
        title: "Titulo 10",
      },
    ]) 

    return (
        <main className={styles.main}>
            <header className={styles.header}><CabecalhoPadrao/></header>
            <div className={styles.core}>

              <div className={styles.sideBar}>
                <div className={`${styles.titlePath} ${styles.txt2}`}> Nome Do Curso Extremamente longo isso não é um livro</div>
                <div className={styles.classAreaAll}>
                    {classes.map((element,index) => (
                      <div className={styles.classArea}>                   
                       <ClassComponent
                       title={element.title}
                       index={index+1}
                       HandleTrue = {(e) => alert("")}
                       HandleFalse= {(e) => alert("")}/>
                      </div>                    
                    ))}
                </div>
              </div>

              <div className={styles.contentArea}>
                <div className={styles.editar}>
                    <div className={styles.edit}>
                      <div className={styles.icon}>
                        <ButtonIMG
                        iconV={"TbPencilCog"}
                        icon_style={"evenConstStyle"}/>
                      </div>
                    </div>
                    <div className={styles.edit}>
                      <div className={styles.icon}>
                        <ButtonIMG
                        iconV={"RxPencil2"}
                        icon_style={"evenConstStyle"}/>
                      </div>
                    </div>
                </div>
                <div className={styles.vidArea}>
                  <iframe className={styles.videoMain} src="https://www.youtube.com/embed/L4skN3uWqAg" frameborder="0"></iframe>

                </div>
                <div className={`${styles.descArea} ${styles.txt}`}>
                  En las sombras de la ciudad de Ipslum, donde las calles se retuercen como serpientes bajo la 
                  niebla eterna, los susurros de los Antiguos nunca cesan. Los habitantes, marcados por el sello
                  de la Desesperanza, caminan con ojos vacíos, sabiendo que cada paso los acerca al Abismo. Los faroles, 
                  alimentados por esencia de almas olvidadas, proyectan destellos de memorias ajenas. Aquí, el tiempo 
                  no fluye; se arrastra. Los rituales se celebran en secreto, invocando entidades que ni los más osados 
                  nombran. Ipslum no perdona, no olvida. Es un laberinto sin salida, donde la locura es la única verdad.
                </div>
              </div>

            </div>            
                    
          
        </main>

    )
}

export default Class