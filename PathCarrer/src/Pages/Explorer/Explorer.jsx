import styles from '../Explorer/Explorer.module.css'

import CabecalhoPadrao from '../../Components/Cabecalho/CabecalhoPadrao'
import Conteudo from '../../Components/Conteudo/Conteudo'

import { useState } from 'react'
import { IoFlameSharp } from "react-icons/io5";
import CabecalhoV2 from '../../Components/CabecalhoV2/CabecalhoV2';

function Explorer (){
   const [onFire,SetonFire] = useState(["Tecnologia Longo","IA","Marketing","Tigrinho","Financias","Enem","CriptoMoedas","Estatistica","Empreendedorismo","Ingles"])
   const [leftElements,SetleftElements] = useState([
      {
         iconV:"FaHouseChimneyWindow",
         icon_style:"evenConstStyle",
         handleClick: ""
      }
   ])


   const [pathExplore,SetPathExplore] = useState([
      {
         img:"https://i.pinimg.com/736x/e1/8c/ee/e18ceea602708d05d3088cadcb4bacbe.jpg",
         adjectives:[
         {
            name:"Direto Ao ponto",
            color: "colorAdjectiveGood"
         },

         {
            name:"Aprofundamento",
            color: "colorAdjectiveGood"
         },

         {
            name:"Interativa",
            color: "colorAdjectiveGood"
         },

         {
            name:"Criativa",
            color: "colorAdjectiveNeah"
         },
         {
            name:"Adaptavel",
            color: "colorAdjectiveBad"
         }],
         PathName: "Aprofundando no Java",
         Category: "Tecnologia"
      },
      {
         img:"https://i.pinimg.com/736x/e1/8c/ee/e18ceea602708d05d3088cadcb4bacbe.jpg",
         adjectives:[
         {
            name:"Direto Ao ponto",
            color: "colorAdjectiveGood"
         },

         {
            name:"Aprofundamento",
            color: "colorAdjectiveGood"
         },

         {
            name:"Interativa",
            color: "colorAdjectiveGood"
         },

         {
            name:"Criativa",
            color: "colorAdjectiveNeah"
         },
         {
            name:"Adaptavel",
            color: "colorAdjectiveBad"
         }],
         PathName: "Aprofundando no Java",
         Category: "Tecnologia"
      },
      {
         img:"https://i.pinimg.com/736x/e1/8c/ee/e18ceea602708d05d3088cadcb4bacbe.jpg",
         adjectives:[
         {
            name:"Direto Ao ponto",
            color: "colorAdjectiveGood"
         },

         {
            name:"Aprofundamento",
            color: "colorAdjectiveGood"
         },

         {
            name:"Interativa",
            color: "colorAdjectiveGood"
         },

         {
            name:"Criativa",
            color: "colorAdjectiveNeah"
         },
         {
            name:"Adaptavel",
            color: "colorAdjectiveBad"
         }],
         PathName: "Aprofundando no Java",
         Category: "Tecnologia"
      },
      {
         img:"https://i.pinimg.com/736x/e1/8c/ee/e18ceea602708d05d3088cadcb4bacbe.jpg",
         adjectives:[
         {
            name:"Direto Ao ponto",
            color: "colorAdjectiveGood"
         },

         {
            name:"Aprofundamento",
            color: "colorAdjectiveGood"
         },

         {
            name:"Interativa",
            color: "colorAdjectiveGood"
         },

         {
            name:"Criativa",
            color: "colorAdjectiveNeah"
         },
         {
            name:"Adaptavel",
            color: "colorAdjectiveBad"
         }],
         PathName: "Aprofundando no Java",
         Category: "Tecnologia"
      },
      {
         img:"https://i.pinimg.com/736x/e1/8c/ee/e18ceea602708d05d3088cadcb4bacbe.jpg",
         adjectives:[
         {
            name:"Direto Ao ponto",
            color: "colorAdjectiveGood"
         },

         {
            name:"Aprofundamento",
            color: "colorAdjectiveGood"
         },

         {
            name:"Interativa",
            color: "colorAdjectiveGood"
         },

         {
            name:"Criativa",
            color: "colorAdjectiveNeah"
         },
         {
            name:"Adaptavel",
            color: "colorAdjectiveBad"
         }],
         PathName: "Aprofundando no Java",
         Category: "Tecnologia"
      },
      {
         img:"https://i.pinimg.com/736x/e1/8c/ee/e18ceea602708d05d3088cadcb4bacbe.jpg",
         adjectives:[
         {
            name:"Direto Ao ponto",
            color: "colorAdjectiveGood"
         },

         {
            name:"Aprofundamento",
            color: "colorAdjectiveGood"
         },

         {
            name:"Interativa",
            color: "colorAdjectiveGood"
         },

         {
            name:"Criativa",
            color: "colorAdjectiveNeah"
         },
         {
            name:"Adaptavel",
            color: "colorAdjectiveBad"
         }],
         PathName: "Aprofundando no Java",
         Category: "Tecnologia"
      },
      {
         img:"https://i.pinimg.com/736x/e1/8c/ee/e18ceea602708d05d3088cadcb4bacbe.jpg",
         adjectives:[
         {
            name:"Direto Ao ponto",
            color: "colorAdjectiveGood"
         },

         {
            name:"Aprofundamento",
            color: "colorAdjectiveGood"
         },

         {
            name:"Interativa",
            color: "colorAdjectiveGood"
         },

         {
            name:"Criativa",
            color: "colorAdjectiveNeah"
         },
         {
            name:"Adaptavel",
            color: "colorAdjectiveBad"
         }],
         PathName: "Aprofundando no Java",
         Category: "Tecnologia"
      },
      {
         img:"https://i.pinimg.com/736x/e1/8c/ee/e18ceea602708d05d3088cadcb4bacbe.jpg",
         adjectives:[
         {
            name:"Direto Ao ponto",
            color: "colorAdjectiveGood"
         },

         {
            name:"Aprofundamento",
            color: "colorAdjectiveGood"
         },

         {
            name:"Interativa",
            color: "colorAdjectiveGood"
         },

         {
            name:"Criativa",
            color: "colorAdjectiveNeah"
         },
         {
            name:"Adaptavel",
            color: "colorAdjectiveBad"
         }],
         PathName: "Aprofundando no Java",
         Category: "Tecnologia"
      },
      {
         img:"https://i.pinimg.com/736x/e1/8c/ee/e18ceea602708d05d3088cadcb4bacbe.jpg",
         adjectives:[
         {
            name:"Direto Ao ponto",
            color: "colorAdjectiveGood"
         },

         {
            name:"Aprofundamento",
            color: "colorAdjectiveGood"
         },

         {
            name:"Interativa",
            color: "colorAdjectiveGood"
         },

         {
            name:"Criativa",
            color: "colorAdjectiveNeah"
         },
         {
            name:"Adaptavel",
            color: "colorAdjectiveBad"
         }],
         PathName: "Aprofundando no Java",
         Category: "Tecnologia"
      },
      {
         img:"https://i.pinimg.com/736x/e1/8c/ee/e18ceea602708d05d3088cadcb4bacbe.jpg",
         adjectives:[
         {
            name:"Direto Ao ponto",
            color: "colorAdjectiveGood"
         },

         {
            name:"Aprofundamento",
            color: "colorAdjectiveGood"
         },

         {
            name:"Interativa",
            color: "colorAdjectiveGood"
         },

         {
            name:"Criativa",
            color: "colorAdjectiveNeah"
         },
         {
            name:"Adaptavel",
            color: "colorAdjectiveBad"
         }],
         PathName: "Aprofundando no Java",
         Category: "Tecnologia"
      },
      
   ])
    return (
        <main className={styles.main}>
            <header className={styles.header}>
               <CabecalhoV2 leftElements={leftElements}/>
            </header>
            <div className={styles.core}>

               <div className={styles.sideBar}>

                  <div className={styles.onFire}>

                     <div className={`${styles.onFire_tite} ${styles.txt1}`}>
                        <div className={styles.onFire_title_main}>
                           Tá todo mundo vendo
                        </div>
                        <div className={styles.onFire_icon}>
                           <IoFlameSharp
                           className={styles.icon}/>
                        </div>
                     </div>

                     <div className={styles.onFire_main}>
                        {onFire.map((element) => (
                           <div className={`${styles.onFireElement} ${styles.txt3}`}>{element}</div>
                        ))}

                     </div>
                  </div>

                  <div className={styles.categorys}>
                     <div className={`${styles.categorysTitle} ${styles.txt1}`}>Pesquise por Categoria</div>
                     <div className={`${styles.categorysElements} ${styles.txt3}`}>
                        {onFire.map((element) => (
                           <div className={styles.CategoryElementMain}>{element}</div>
                        ))}
                     </div>
                  </div>

               </div>

               <div className={styles.mainContent}>                 
                     {pathExplore.map((element) => (
                        <div className={styles.contentArea}>
                           <Conteudo
                           img={element.img}
                           adjectives={element.adjectives}
                           PathName={element.PathName}
                           Category={element.Category}
                           onClick={(e) => alert("Teste")}
                           />
                        </div>
                     ))}
               </div>
              
            </div>
        </main>
    )
}

export default Explorer