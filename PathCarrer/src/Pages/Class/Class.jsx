import styles from '../Class/Class.module.css'

import CabecalhoPadrao from '../../Components/Cabecalho/CabecalhoPadrao'
import WindowText from '../../Components/WindowText/WindowText'
import ButtonIMG from '../../Components/ButtonIMG/ButtonIMG'

function Class (){
    return (
        <main className={styles.main}>
            <header className={styles.header}><CabecalhoPadrao/></header>
            <div className={styles.core}>
                <div className={styles.menLateral}>
                  <div className={styles.moduleName}>NOME DO MODULO</div>
                  <div className={styles.classContainer}>                    
                    <div className={styles.class}><WindowText 
                      classModel={"mainModel2"} 
                      classStyle={"mainStyle2"}/>
                    </div>                     
                  </div>
                  <div className={styles.backGround}></div>
                </div>
                <div className={styles.conteudo}>
                    <div className={styles.tela}>
                      <div className={styles.editButton}><ButtonIMG/></div>
                      <iframe className={styles.iframe} src="https://www.youtube.com/embed/lZiaYpD9ZrI" frameborder="0"></iframe>
                    </div>
                    <p className={styles.desc}>
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a 
                    piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, 
                    a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, 
                    consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, 
                    discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum
                    et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory
                    of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", 
                    comes from a line in section 1.10.32.

                    The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 
                    and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied 
                    by English versions from the 1914 translation by H. Rackham.

                    </p>
                </div>
            </div>
        </main>

    )
}

export default Class