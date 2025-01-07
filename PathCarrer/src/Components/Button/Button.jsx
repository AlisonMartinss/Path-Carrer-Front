import styles from '../Button/Button.module.css'

function Button (props) {
    return (
        <main className={styles.main}>
            <button className={styles.button} onClick={props.func} type={props.type}>
                {props.message}
            </button>
        </main>

    )
}

export default Button