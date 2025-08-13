import styles from './Alerta.module.css'

function PasswordInput(){
    return (
        <input className={styles.card} type="password" placeholder="Digite sua senha aqui"/>
    )
}

export default PasswordInput