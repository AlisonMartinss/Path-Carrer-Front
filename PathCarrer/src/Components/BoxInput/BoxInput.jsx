import styles from '../BoxInput/BoxInput.module.css'

function BoxInput (props) {
    return (
        <form className={styles.main}>
            <select className={`${styles.options} ${styles.txtover}`} id={props.id} name={props.name}>

                <option  value={props.v1}>{props.txt1}</option>
                <option  value={props.v2}>{props.txt2}</option>
                <option  value={props.v3}>{props.txt3}</option>
                <option  value={props.v4}>{props.txt4}</option>
                <option  value={props.v5}>{props.txt5}</option>

                <option  value={props.v6}>{props.txt6}</option>
                <option  value={props.v7}>{props.txt7}</option>
                <option  value={props.v8}>{props.txt8}</option>
                <option  value={props.v9}>{props.txt9}</option>
                <option  value={props.v10}>{props.txt10}</option>

                <option  value={props.v11}>{props.txt11}</option>
                <option  value={props.v12}>{props.txt12}</option>
                <option  value={props.v13}>{props.txt13}</option>
                <option  value={props.v14}>{props.txt14}</option>
                <option  value={props.v15}>{props.txt15}</option>

            </select>
        </form>

    )
}

export default BoxInput