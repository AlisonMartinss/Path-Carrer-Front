import style from '../WindowModule/WindowModule.module.css'

function WindowModule ({titleMain,subTile,nClassYep,nClass,img,onClick}){
    let porcent = Math.trunc(nClassYep*100/nClass);
    function SetColor () {
        console.log("nClass: ")
        console.log(nClass)

        console.log("nClassYep: ")
        console.log(nClassYep)
        if (porcent < 50){
            return "red"
        }
        else if (porcent > 50 && porcent < 75){
            return "Yellow"
        }
        else {
            return "Green"
        }
    }
    return (
        <main onClick={onClick} className={`${style.main} ${style.style1}`}>
            <div className={style.Pre_img}>
                <img  className={style.img} src={img} alt="Icone do curso" />
            </div>
            <div className={style.title_SubTitle}>
                <div className={`${style.title_Main} ${style.txtOver}`}>{titleMain}</div>
                <div className={`${style.sub_title} ${style.txtOver2}`}>{subTile}</div>              
            </div>
            <div className={`${style.Relative} ${style[SetColor()]}`}>
                <div className={`${style.relative_content} ${style.txtOver}`}>
                    {`${Math.trunc(nClassYep*100/nClass)} %`}
                </div>
            </div>
        </main>

    )

}

export default WindowModule