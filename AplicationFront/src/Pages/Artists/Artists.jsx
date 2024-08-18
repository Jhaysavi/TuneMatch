import Artist from '../../Components/Artist/Artist';
import styles from './Artists.module.css';
import Button from '../../Components/Button/Button';


function Artists() {
    return (
        <section className={styles.main}>
            <h1 className={styles.title}>Select the artists that you like.</h1>
            <h4 className={styles.subtitle}>You can add more to your favorites later.</h4>

            <section className={styles.container}>
                <Artist
                    img="/src/assets/pink-headphones-purple.png"
                    name="Slipknot"
                />
            </section>

            <Button 
                name="Finish"
            />
        </section>

    );
}

export default Artists;