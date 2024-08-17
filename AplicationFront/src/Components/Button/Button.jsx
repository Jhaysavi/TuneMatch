import styles from './Button.module.css';

function Button({name}) {
    return (
        <button type='submit' className={styles.btn}>{name}</button>
    );
}

export default Button;