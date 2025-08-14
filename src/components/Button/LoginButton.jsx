import styles from './Button.module.css'

function LoginButton(){
    return (
        <button type="submit" className={styles.botao}>Entrar</button>
    )
}

export default LoginButton