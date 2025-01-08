import styles from '../Button/Button.module.css'

function Button (props) {
    const className = styles[props.class] || '';
    
    return (
    <button class={className} onClick={props.func} type={props.type}>
         {props.message}
    </button>
    )
}

export default Button