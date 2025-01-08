import styles from '../Dicas/Dicas.module.css'

function Dicas (props) {
    const className = styles[props.class] || '';
    return (
        <div className={`${styles.box} ${className}`}>
            <div className={`${styles.message}`}>
                {props.message}
            </div>
        </div>

    )
}

export default Dicas