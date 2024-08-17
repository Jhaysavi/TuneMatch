import Genre from '../../Components/Genre/Genre';
import styles from './Genres.module.css';
import Button from '../../Components/Button/Button';


function Genres() {
    return (
        <div className={styles.main}>
            <h1 className={styles.title}>Select your favorites music genres!</h1>

            <section className={styles.container}>
                <Genre
                    img="/src/assets/pink-headphones-purple.png"
                    name="Rock"
                />

                <Genre
                    img="/src/assets/pink-headphones-purple.png"
                    name="Rock"
                />

                <Genre
                    img="/src/assets/pink-headphones-purple.png"
                    name="Rock"
                />

                <Genre
                    img="/src/assets/pink-headphones-purple.png"
                    name="Rock"
                />

                <Genre
                    img="/src/assets/pink-headphones-purple.png"
                    name="Rock"
                />

                <Genre
                    img="/src/assets/pink-headphones-purple.png"
                    name="Rock"
                />
            </section>

            <Button
                name="Next"
            />
        </div>
    );
}

export default Genres;