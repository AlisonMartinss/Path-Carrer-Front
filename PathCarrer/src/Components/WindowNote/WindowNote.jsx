import style from '../WindowNote/WindowNote.module.css'

function WindowNote ({note}){
    return (
        
        <main className={`${style.main} ${style.textLayout} ${style.stylesText}`}>
            <div className={style.style1}>
                  <p className={style.noteClass}>{note}</p>
            </div>
            
            
        </main>

    )
}

export default WindowNote