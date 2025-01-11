import styles from '../Explorer/Explorer.module.css'

import CabecalhoPadrao from '../../Components/Cabecalho/CabecalhoPadrao'
import Conteudo from '../../Components/Conteudo/Conteudo'

function Explorer (){
    return (
        <main className={styles.main}>
            <header className={styles.header}><CabecalhoPadrao/></header>
            <div className={styles.core}>
                <div className={styles.coreContent}>
                 <div className={styles.content}><Conteudo tituloModulo={"INSERINDO EXEMPLAR DE UM TITULO PARA O CONTEUDO QUE A DE VIR"}/></div>
                 <div className={styles.content}><Conteudo/></div>
                 <div className={styles.content}><Conteudo/></div>
                 <div className={styles.content}><Conteudo/></div>
                 <div className={styles.content}><Conteudo/></div>
                 <div className={styles.content}><Conteudo/></div>
                 <div className={styles.content}><Conteudo/></div>
                 <div className={styles.content}><Conteudo/></div>
                 <div className={styles.content}><Conteudo/></div>
                 <div className={styles.content}><Conteudo/></div>
                 <div className={styles.content}><Conteudo/></div>
                 <div className={styles.content}><Conteudo/></div>
                </div>     
            </div>
        </main>
    )
}

export default Explorer