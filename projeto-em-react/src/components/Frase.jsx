import styles from './Frase.module.css';

function Frase(){
    return (
        <div className={styles.fraseContainer}>
            <p className={styles.fraseContent}>Aqui há uma frase!</p>
        </div>
    )
}     
export default Frase
