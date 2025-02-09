import { useState } from 'react'
import style from '../SideBar/SideBar.module.css'
import ButtonIMG from '../ButtonIMG/ButtonIMG'

function SideBar ({handleClick}){
    const [arraAuxMedals, setArrAuxMedals] = useState([1,2,3])
    const [arraAuxAdjectives, setArrAuxAdjectives] = useState([1,2,3,4,5])

    const [isClicked, setIsClicked] = useState(false);
    const handleClickSide = () => {
        
        setIsClicked((prev) => (!prev))
        handleClick();
        
    };

    return (
        <main className={style.main}>
            
            <div className={style.on_off}>
                <div className={style.onOff_main}>
                        <ButtonIMG
                        iconV={"RxHamburgerMenu"}
                        icon_style={"evenConstStyle"}
                        handleClick={handleClickSide}/>
                </div>
            </div>

            <div className={`${style.mainArea} ${isClicked ? style.mainAreaOFF : style.mainAreaON}`}>
                <div className={style.autor_aspects}>
                    <div className={style.top_area}>
                        <img className={style.img}  src="https://images01.brasildefato.com.br/3c1e68a809014ac080756f5af6060ac2.jpeg" alt="" />
                    </div>

                    <div className={`${style.profile_props} ${isClicked ? style.profile_propsOFF : style.profile_props}`}>
                            <div className={style.perfil_img}>
                                <img className={style.img} src="https://i.pinimg.com/736x/2d/b4/5a/2db45a52981db5f5d5ac0c5e756b611d.jpg" alt="Perfil Potho" />
                            </div>
                            {arraAuxMedals.map((element) => (
                            <div className={style.medals_img}></div>
                            ))}
                    </div> 
                    <div className={style.bottom_area}></div> 
                </div>

                <div className={style.adjectives_area}>
                    {arraAuxAdjectives.map((element) => (
                        <div className={style.adjectie_element}></div>
                    ))}

                </div>

                <div className={style.descArea}>
                    <div className={style.barra_desc}></div>
                    <div className={style.desc_main}></div>
                </div>
            </div>
        </main>
    )
}

export default SideBar