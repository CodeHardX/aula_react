import styles from './Input.module.css'

function PasswordInput(){
    return (
        <input className={styles.cardS} type="password" placeholder="Digite sua senha aqui"/>
    )
}

export default PasswordInput