import styles from '../Explorer/Explorer.module.css'


import { useEffect, useState } from 'react'
import { IoFlameSharp } from "react-icons/io5";

import CabecalhoV2 from '../../Components/CabecalhoV2/CabecalhoV2';
import Conteudo from '../../Components/Conteudo/Conteudo'

import { Explore, CategoryExplorer,MyPaths} from './ExplorerAux';
import { useNavigate } from 'react-router';

function Explorer (){

   const navigate = useNavigate();    
   const [onFire,SetonFire] = useState(["Todos","Inteligência Artificial","Marketing Digital","Educação Financeira","Tecnologia da Informação","Modelo de Negócio","Produtividade","Design Gráfico","Criptomoedas","Seus Paths"])
   const [pathExplore,SetPathExplore] = useState(null);
   const [leftElements,SetleftElements] = useState([
      {
         iconV:"FaHouseChimneyWindow",
         icon_style:"evenConstStyle",
         handleClick: ""
      }
   ])

   const ClickonPath = (e) =>{
      localStorage.setItem("PathID_on",e);
      navigate('/ContentAcess')   
   }

   const ClickCategory = (e) => {
      const fetchData = async () => {
      try{
         if (e === "Seus Paths"){
            const contentPath = await MyPaths();
            if (Array.isArray(contentPath)) {
               SetPathExplore(contentPath);
            } else {
               SetPathExplore([]);
            }  
         }else {
            const contentPath = await CategoryExplorer(e);
            if (Array.isArray(contentPath)) {
               SetPathExplore(contentPath);
            } else {
               SetPathExplore([]);
            }
         } 
       }
      catch (error) {
         console.error("Erro ao buscar Category Explorer:", error);
         SetPathExplore([]);
       }
      }
      fetchData();
   }


   useEffect(() => {
      if (localStorage.getItem("exploreObjective") === "exploreDefault"){
         (async () => {
            try {
               const contentPath = await Explore(); 
               if (Array.isArray(contentPath)) {
                  SetPathExplore(contentPath);
               } else {
                  SetPathExplore([]);
               }
            } catch (error) {
               SetPathExplore([]);
            }
         })();
      }else {
         (async () => {
            try {
               const contentPath = await MyPaths(); 
               if (Array.isArray(contentPath)) {
                  SetPathExplore(contentPath);
               } else {
                  SetPathExplore([]);
               }
            } catch (error) {
               SetPathExplore([]);
            }
         })();

      }
      }, []);
    return (
        <main className={styles.main}>
            <header className={styles.header}>
               <CabecalhoV2 leftElements={leftElements}/>
            </header>
            <div className={styles.core}>

               <div className={styles.sideBar}>
                  
                  <div className={styles.categorys}>
                     <div className={`${styles.categorysTitle} ${styles.txt1}`}>Pesquise por Categoria</div>
                     <div className={`${styles.categorysElements} ${styles.txt3}`}>
                        {onFire.map((element) => (
                           <div className={styles.CategoryElementMain} onClick={(e) => ClickCategory(element)}>
                              {element}
                           </div>
                        ))}
                     </div>
                  </div>

               </div>

               <div className={styles.mainContent}>                 
               {Array.isArray(pathExplore) && pathExplore.length > 0 ? (
                  pathExplore.map((element) => (
                     <div className={styles.contentArea}>
                        <Conteudo
                           img={element.banner}
                           adjectives={element.adjectivesElements}
                           PathName={element.title}
                           Category={element.category}
                           onClick={(e) => ClickonPath(element.id)}
                           views={element.everAdd}
                        />
                     </div>
                  ))) : (
                  <div className={`${styles.warring} ${styles.txt1}`}>Não há Paths nessa categoria para exibir.</div>
               )}
               </div>
              
            </div>
        </main>
    )
}

export default Explorer