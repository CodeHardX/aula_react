import styles from './Alerta.module.css'

function EmailInput(){
    return (
        <input className={styles.card} type="email" placeholder="Digite aqui seu email"/>
    )
}

export default EmailInput