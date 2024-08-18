import styles from './Artist.module.css';

function Artist({ name, img, isSelected, onClick }) {
    return (
        <figure 
            className={`${styles.artist} ${isSelected ? styles.selected : ''}`} 
            onClick={onClick}
        >
            <img src={img} className={styles.img} alt={name} />
            <figcaption>
                <h4 className={styles.name}>{name}</h4>
            </figcaption>
        </figure>
    );
}

export default Artist;
