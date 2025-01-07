import Styles from '../Cabecalho/Cabecalho.module.css'

function CabecalhoPadrao (props){
    return (
        <main className={Styles.main}>

            <img className={Styles.img} src={props.img} alt="Logo"/> 

            <div className={Styles.div}>
             <a className={Styles.txtover} href={props.link1}>{props.txt1}</a>
             <a className={Styles.txtover} href={props.link2}>{props.txt2}</a>
             <a className={Styles.txtover} href={props.link3}>{props.txt3}</a>
            </div>
        </main>

    )
}

export default CabecalhoPadrao