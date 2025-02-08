import style from '../WindowModule/WindowModule.module.css'

function WindowModule ({titleMain,subTile,porcent,img}){
    return (
        <main className={`${style.main} ${style.style1}`}>
            <div className={style.Pre_img}>
                <img  className={style.img} src={img} alt="Icone do curso" />
            </div>
            <div className={style.title_SubTitle}>
                <div className={`${style.title_Main} ${style.txtOver}`}>{titleMain}</div>
                <div className={`${style.sub_title} ${style.txtOver2}`}>{subTile}</div>              
            </div>
            <div className={style.Relative}>
                <div className={`${style.relative_content} ${style.txtOver}`}>{porcent}</div>
            </div>
        </main>

    )

}

export default WindowModule