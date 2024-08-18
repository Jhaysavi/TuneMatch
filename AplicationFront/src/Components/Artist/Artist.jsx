import styles from './Artist.module.css';

function Artist ({name, img}) {
    return(
        <figure className={styles.artist}>
            <img src={img} className={styles.img} alt="" />

            <figcaption>
                <h4 className={styles.name}>{name}</h4>
            </figcaption>
        </figure>

    );
}

export default Artist;