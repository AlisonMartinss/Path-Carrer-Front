import styles from '../IconAfter/IconAfter.module.css'

function IconAfter (){
    const comp = {
       
    }
    
    const Componente =  comp[props.icone]
    const classe     =  styles[props.icone_style]
    return (
        <main>
           <Componente className={classe} />
        </main>
    )
}

export default IconAfter