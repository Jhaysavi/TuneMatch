import styles from './InputGroup.module.css';

function InputGroup({ name, nameLabel, type }) {
    return (
        <fieldset className={styles.inputGroup}>
            <label htmlFor={name} className={styles.label}>{nameLabel}:</label>
            <input type={type} id={name} className={styles.input} />
        </fieldset>
    );
}

export default InputGroup;