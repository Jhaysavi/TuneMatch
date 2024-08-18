import styles from './Button.module.css';

function Button({ name, onClick }) {
    return (
        <button className={styles.btn} onClick={onClick}>
            {name}
        </button>
    );
}

export default Button;