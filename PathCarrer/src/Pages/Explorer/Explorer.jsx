import styles from '../Explorer/Explorer.module.css'


import { useEffect, useState } from 'react'
import { IoFlameSharp } from "react-icons/io5";

import CabecalhoV2 from '../../Components/CabecalhoV2/CabecalhoV2';
import Conteudo from '../../Components/Conteudo/Conteudo'

import { Explore, CategoryExplorer } from './ExplorerAux';
import { useNavigate } from 'react-router';

function Explorer (){

   const navigate = useNavigate();    
   const [onFire,SetonFire] = useState(["Tecnologia Longo","IA","Marketing","Tigrinho","Outro","Financias","Enem","CriptoMoedas","Estatistica","Empreendedorismo","Ingles"])
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
         const contentPath = await CategoryExplorer(e);
         console.log("API Response:", contentPath); // Verifica os dados no console
         if (Array.isArray(contentPath)) {
            SetPathExplore(contentPath); // Só define se for um array
         } else {
            SetPathExplore([]); // Evita erro se a API retornar um valor inválido
         }   
       }
      catch (error) {
         console.error("Erro ao buscar Category Explorer:", error);
         SetPathExplore([]); // Em caso de erro, evita erro de `.map()`
       }
      }
      fetchData();
   }


      useEffect(() => {
         const fetchData = async () => {
            try {
               const contentPath = await Explore(); // Aguarda a Promise ser resolvida
               console.log("API Response:", contentPath); // Verifica os dados no console
               if (Array.isArray(contentPath)) {
                  SetPathExplore(contentPath); // Só define se for um array
               } else {
                  SetPathExplore([]); // Evita erro se a API retornar um valor inválido
               }
            } catch (error) {
               console.error("Erro ao buscar explorer:", error);
               SetPathExplore([]); // Em caso de erro, evita erro de `.map()`
            }
         };
      
         fetchData(); // Chama a função assíncrona dentro do useEffect
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
                        />
                     </div>
                  ))) : (
                  <div>Não há Paths para exibir.</div>
               )}
               </div>
              
            </div>
        </main>
    )
}

export default Explorer