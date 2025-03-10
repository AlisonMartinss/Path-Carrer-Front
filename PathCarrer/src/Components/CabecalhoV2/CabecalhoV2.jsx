import style from '../CabecalhoV2/CabecalhoV2.module.css'
import Logo from '../../../src/assets/Midias/Logo25.png'
import ButtonIMG from '../ButtonIMG/ButtonIMG'

import SearchInput from '../SearchInput/SearchInput'


function CabecalhoV2 ({leftElements=[],logoPath,title}){
    return (
        <main className={style.main}>
            <div className={style.rigthArea}>
                <a className={style.preLogoArea} href={logoPath}>
                  <img className={style.logoArea} src={Logo} alt="" />
                </a>               
            </div>
            <div className={style.searchArea}>
                
            </div>
            <div className={style.leftArea}>
                {leftElements.map((element) => (
                    <div className={style.iconArea}>
                        <ButtonIMG
                            className={style.iconConfg}
                            iconV={element.iconV}
                            icon_style={element.icon_style}
                            handleClick={element.handleClick}
                            title={element.title}
                        />                  
                    </div>
                ))}
            </div>
        </main>

    )
}

export default CabecalhoV2