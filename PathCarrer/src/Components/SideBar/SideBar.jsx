import { useState } from 'react'
import style from '../SideBar/SideBar.module.css'

function SideBar (){
    const [arraAux, setArrAux] = useState([1,2,3])
    return (
        <main className={style.main}>
            <div className={style.on_off}></div>
            <div className={style.mainArea}>
                <div className={style.autor_aspects}>

                    <div className={style.top_area}>
                        <img className={style.img}  src="https://images01.brasildefato.com.br/3c1e68a809014ac080756f5af6060ac2.jpeg" alt="" />
                    </div>

                    <div className={style.profile_props}>
                            <div className={style.perfil_img}>
                                <img className={style.img} src="https://i.pinimg.com/736x/2d/b4/5a/2db45a52981db5f5d5ac0c5e756b611d.jpg" alt="Perfil Potho" />
                            </div>
                            {arraAux.map((element) => (
                            <div className={style.medals_img}></div>
                            ))}
                    </div> 

                    <div className={style.bottom_area}></div> 
                    

                </div>
            </div>
        </main>
    )
}

export default SideBar