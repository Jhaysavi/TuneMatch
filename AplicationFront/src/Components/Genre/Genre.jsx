import styles from './Genre.module.css';

function Genre({name,img}) {
    return (
        <figure className={styles.genre}>
            <img src={img} className={styles.img} alt="" />

            <figcaption>
                <h4 className={styles.name}>{name}</h4>
            </figcaption>
        </figure>

    );
}

export default Genre;