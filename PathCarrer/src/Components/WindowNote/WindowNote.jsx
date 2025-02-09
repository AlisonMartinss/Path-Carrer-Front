import style from '../WindowNote/WindowNote.module.css'

import RelatedComponents from '../../Components/RelatedComponents/RelatedComponents'

function WindowNote ({note,userName,icon_Aa,icon_Bb,ClasseAfterA,ClasseAfterB,buttonActiveA,buttonActiveB,mensagemA,mensagemB}){
    const ClickTest = () => {
    }
    return (
        
        <main className={`${style.main} ${style.textLayout} ${style.stylesText}`}>
            <div className={style.style1}>
                <div className={style.userNameArea}>{userName}</div>

                <div className={style.noteClass}>{note}</div>

                <div className={style.likeButton}>
                  <RelatedComponents
                  icon_Aa={icon_Aa}
                  icon_Bb={icon_Bb}
                  ClasseAfterA={ClasseAfterA}
                  ClasseAfterB={ClasseAfterB}
                  buttonActiveA={buttonActiveA}
                  buttonActiveB={buttonActiveB}
                  mensagemA={mensagemA}
                  mensagemB={mensagemB}
                  buttonActive={ClickTest}
                  />
                </div>
            </div>   
        </main>

    )
}

export default WindowNote