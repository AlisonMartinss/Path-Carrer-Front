import style from '../WindowNote/WindowNote.module.css'

import ButtonIMG from '../ButtonIMG/ButtonIMG'

function WindowNote ({note,date,trashButton}){

    return (
        
        <main className={`${style.main} ${style.textLayout} ${style.stylesText}`}>
            
            <div className={style.style1}>
                <div className={style.decoration}></div>
                <div className={style.noteClass}>{note}</div>

                <div  className={style.trash_date_Area}>

                  <div title={"Excluir nota"} className={style.iconArea}>
                    <ButtonIMG
                    iconV={"HiOutlineTrash"}
                    icon_style={"evenConstStyleTrash"}
                    handleClick={trashButton}
                    />
                  </div>

                  <div title={"Data de quando a anotação foi feita"} className={style.iconArea}>

                    {date[date.length-2]+date[date.length-1]+"/"+
                    date[date.length-5]+date[date.length-4]+"/"+
                    date[date.length-10]+date[date.length-9]+date[date.length-8]+date[date.length-7]}
                  </div>
                
                </div>
            </div>   
        </main>

    )
}

export default WindowNote