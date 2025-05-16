import { useState,useEffect } from 'react'
import style from '../SideBar/SideBar.module.css'
import ButtonIMG from '../ButtonIMG/ButtonIMG'

function SideBar ({handleClick,description,AuthorName,adjectivesList,imgPerfil,imgBanner}){
    const [arraAuxMedals, setArrAuxMedals] = useState([])
    const [arraAuxAdjectives,setArraAuxAdjectives] = useState(adjectivesList)

    const [isClicked, setIsClicked] = useState(false);
    const handleClickSide = () => {       
        setIsClicked((prev) => (!prev))
        handleClick();     
    };

    useEffect(() => {
        if (Array.isArray(adjectivesList)) {
            setArraAuxAdjectives(adjectivesList);
        }
    }, [adjectivesList]);

    return (
        <main className={style.main}>
            
            <div className={`${isClicked ? style.on_offModed : style.on_off}`}>
                <div className={`${isClicked ? style.onOff_mainModed : style.onOff_main}`}>
                        <ButtonIMG
                        iconV={"RxHamburgerMenu"}
                        icon_style={"evenConstStyle"}
                        handleClick={handleClickSide}/>
                </div>
            </div>

            <div className={`${style.mainArea} ${isClicked ? style.mainAreaOFF : style.mainAreaON}`}>
                <div className={style.autor_aspects}>
                    <div className={style.top_area}>
                        <img className={style.img}  src={imgBanner === null || imgBanner === undefined ? (
                            "../../../src/assets/Midias/PNGs/images/BannerDefault.png"
                        ):imgBanner} alt="Foto do Banner" />
                    </div>

                    <div className={`${style.profile_props} ${isClicked ? style.profile_propsOFF : style.profile_props}`}>
                            <div className={style.perfil_img}>
                                <img className={style.img} src={imgPerfil !== null ? imgPerfil : 
                                    "../../../src/assets/Midias/PNGs/images/DefaultProfile.png"} alt="Perfil Foto" />
                                    
                            </div>
                            {arraAuxMedals.map((element) => (
                            <div className={style.medals_img}></div>
                            ))}
                    </div> 
                    <div className={`${style.bottom_area} ${style.txtOver}`}>{AuthorName}</div> 
                </div>
                
                {/* 
                <div className={style.adjectives_area}>
                    {Array.isArray(arraAuxAdjectives) && arraAuxAdjectives.length > 0 ? (
                          arraAuxAdjectives.map((element) => (
                            <div className={`${style.adjectie_element} ${style.txtOver2}`}>
                                {element.name}
                            </div>
                           ))
                        ) : (
                        <div className={style.txtOver2}>Não há Adjetivos para exibir.</div>
                    )}
                    
                </div>
                */}

                <div className={style.descArea}>
                    <div className={style.barra_desc}></div>
                    <div className={`${style.desc_main} ${style.txtOver2}`}>{description}</div>
                </div>
            </div>
        </main>
    )
}

export default SideBar