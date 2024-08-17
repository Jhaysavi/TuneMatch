import styles from './Initial.module.css';

function Initial (){
    return(
        <>
            <img src="/logo.png" className={styles.logoImg} alt="TuneMatch logo" />

            <h3 className={styles.title}>Login/Register</h3>

            <section className={styles.container}>
                <button className={styles.btnListners}>
                    <a href="#">Discover new artists!</a>
                </button>

                <button className={styles.btnArtist}>
                    <a href="#">I'm a artists!</a>
                </button>
            </section>
        </>
    );
}

export default Initial;
