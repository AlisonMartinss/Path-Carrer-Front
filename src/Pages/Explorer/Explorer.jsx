import styles from '../Explorer/Explorer.module.css'

import { useEffect, useState } from 'react'

import CabecalhoV2 from '../../Components/CabecalhoV2/CabecalhoV2';
import Conteudo from '../../Components/Conteudo/Conteudo'
import LoadIcon from '../../Components/LoadIcon/LoadIcon';

import { Explore, CategoryExplorer, MyPaths } from './ExplorerAux';
import { useNavigate } from 'react-router';

function Explorer() {

   const navigate = useNavigate();

   const [searchMecanism, SetSearchMecanism] = useState({
      category: "",
      penultimateSearch: "",
      isLoading: true,
      AuxIsLoad: false
   });

   const [onFire] = useState([
      "Todos", "Inteligência Artificial", "Marketing Digital",
      "Educação Financeira", "Tecnologia da Informação",
      "Modelo de Negócio", "Produtividade", "Design Gráfico",
      "Criptomoedas", "Seus Paths"
   ]);

   const [pathExplore, SetPathExplore] = useState(null);

   const [leftElements] = useState([
      {
         iconV: "FaHouseChimneyWindow",
         icon_style: "evenConstStyle",
         handleClick: ""
      }
   ]);

   const ClickonPath = (e) => {
      localStorage.setItem("PathID_on", e);
      navigate('/ContentAcess');
   };

   const fetchPaths = async (type, category = "") => {
      try {
         SetSearchMecanism((prev) => ({ ...prev, isLoading: true }));

         let contentPath = [];

         if (type === "default") {
            contentPath = await Explore();
         } else if (type === "mine") {
            contentPath = await MyPaths();
         } else if (type === "category") {
            if (category === "Seus Paths") {
               contentPath = await MyPaths();
            } else {
               contentPath = await CategoryExplorer(category);
            }
         }

         SetPathExplore(Array.isArray(contentPath) ? contentPath : []);
      } catch (error) {
         console.error("Erro ao buscar paths", error);
         SetPathExplore([]);
      } finally {
         SetSearchMecanism((prev) => ({ ...prev, isLoading: false }));
      }
   };

   useEffect(() => {
      const objective = localStorage.getItem("exploreObjective");
      if (objective === "exploreDefault") {
         fetchPaths("default");
      } else {
         fetchPaths("mine");
      }
   }, []);

   useEffect(() => {
      if (searchMecanism.AuxIsLoad) {
         fetchPaths("category", searchMecanism.category);
         SetSearchMecanism((prev) => ({
            ...prev,
            AuxIsLoad: false
         }));
      }
   }, [searchMecanism.AuxIsLoad]);

   const handleCategoryClick = (element) => {
      SetSearchMecanism((prev) => ({
         ...prev,
         category: element,
         isLoading: true,
         AuxIsLoad: true
      }));
   };

   return (
      <main className={styles.main}>
         <header className={styles.header}>
            <CabecalhoV2 leftElements={leftElements} />
         </header>
         <div className={styles.core}>

            <div className={styles.sideBar}>
               <div className={styles.categorys}>
                  <div className={`${styles.categorysTitle} ${styles.txt1}`}>
                     Pesquise por Categoria
                  </div>
                  <div className={`${styles.categorysElements} ${styles.txt3}`}>
                     {onFire.map((element) => (
                        <div
                           key={element}
                           className={styles.CategoryElementMain}
                           onClick={() => handleCategoryClick(element)}
                        >
                           {element}
                        </div>
                     ))}
                  </div>
               </div>
            </div>

            <div className={styles.mainContent}>
               {searchMecanism.isLoading ? (
                  <div className={styles.contentArea}>
                     <div className={styles.loadIcon}>
                        <LoadIcon msg={"Carregando Paths . . ."} />
                     </div>
                  </div>
               ) : Array.isArray(pathExplore) && pathExplore.length > 0 ? (
                  pathExplore.map((element) => (
                     <div key={element.id} className={styles.contentArea}>
                        <Conteudo
                           img={element.banner}
                           adjectives={element.adjectivesElements}
                           PathName={element.title}
                           Category={element.category}
                           onClick={() => ClickonPath(element.id)}
                           views={element.everAdd}
                        />
                     </div>
                  ))
               ) : (
                  <div className={`${styles.warring} ${styles.txt1}`}>
                     Não há Paths nessa categoria para exibir.
                  </div>
               )}
            </div>

         </div>
      </main>
   );
}

export default Explorer;
