import styles from '../Button/Button.module.css'

function Button (props) {
    return (
    <button className={styles.button} onClick={props.func} type={props.type}>
         {props.message}
    </button>
    )
}

export default Button