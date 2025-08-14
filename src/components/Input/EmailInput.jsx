import styles from './Input.module.css'

function EmailInput(){
    return (
        <input className={styles.cardE} type="email" placeholder="Digite aqui seu email"/>
    )
}

export default EmailInput