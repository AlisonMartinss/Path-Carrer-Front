import styles from '../Explorer/Explorer.module.css'

import CabecalhoPadrao from '../../Components/Cabecalho/CabecalhoPadrao'
import Conteudo from '../../Components/Conteudo/Conteudo'
import SearchInput from '../../Components/SearchInput/SearchInput'
import { useState } from 'react'

"Aprofundamento","Interativa","Criativa","Adaptavel"

function Explorer (){
   const [Compass,SetCompass] = useState(0)
   const addCompass = () => {
      SetCompass(Compass+1)
   }
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
      }
      
   ])
    return (
        <main className={styles.main}>
            <header className={styles.header}><CabecalhoPadrao/></header>
            <div className={styles.core}>
               <div className={styles.sideBar}></div>
               <div className={styles.mainContent}>

                  <div className={styles.agroupContentLine}>
                     {pathExplore.slice(Compass, Compass+3).map((element) => (
                        <div className={styles.contentArea}>
                           <Conteudo
                           img={element.img}
                           adjectives={element.adjectives}
                           PathName={element.PathName}
                           Category={element.Category}
                           onClick={""}
                           />
                        </div>
                     ))}
                  </div>

               </div>
              
            </div>
        </main>
    )
}

export default Explorer