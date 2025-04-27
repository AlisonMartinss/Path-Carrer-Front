import style from '../CabecalhoV2/CabecalhoV2.module.css'
import Logo from '../../../src/assets/Midias/Logo25.png'
import ButtonIMG from '../ButtonIMG/ButtonIMG'

import SearchInput from '../SearchInput/SearchInput'
import { useState } from 'react'
import { useNavigate } from 'react-router'



function CabecalhoV2 ({logoPath,title}){

    const navigate = useNavigate();

    const createPath = () => {
        navigate('/createPath')
    }



    const [leftElements] = useState([
              {iconV: "FaFolderOpen",
              icon_style: "evenConstStyle",
              handleClick:"",
              title:"Seus Paths"
              },
    
              {iconV: "CgProfile",
              icon_style: "evenConstStyle",
              handleClick:() => navigate('/viewProfile'),
              title:"Perfil"
              },
    
              {iconV: "IoIosAddCircle",
              icon_style: "evenConstStyle",
              handleClick:() => navigate('/createPath'),
              title:"Criar novo path"
              },
              {iconV: "IoHome",
                icon_style: "evenConstStyle",
                handleClick:() => navigate('/Loby'),
                title:"voltar para o loby"
              },
              {iconV: "IoIosCompass",
                icon_style: "evenConstStyle",
                handleClick:() => { localStorage.setItem("exploreObjective","exploreDefault"),navigate('/explorer')},
                title:"explorar Paths"
              }
        ]);



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