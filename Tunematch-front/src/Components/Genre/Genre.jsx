import styles from './Genre.module.css';

function Genre({ name, img, isSelected, onClick }) {
    console.log('Genre props:', { name, img, isSelected }); // Debugging line
    return (
        <figure 
            className={`${styles.genre} ${isSelected ? styles.selected : ''}`} 
            onClick={onClick}
        >
            <img src={img} className={styles.img} alt={name} />
            <figcaption>
                <h4 className={styles.name}>{name}</h4>
            </figcaption>
        </figure>
    );
}

export default Genre;
