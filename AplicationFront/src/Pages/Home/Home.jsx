import React, { useState } from 'react';
import styles from './Home.module.css';
import Artist from '../../Components/Artist/Artist';

function Home() {
    const [activeSection, setActiveSection] = useState('songs'); // Estado para controlar a seção ativa

    return (
        <>
            <section className={styles.sugestions}>
                <h2 className={styles.title}>Suggestions:</h2>
                <button className={styles.btn} onClick={() => setActiveSection('songs')}>
                    Songs
                </button>
                <button className={styles.btn} onClick={() => setActiveSection('artists')}>
                    Artists
                </button>

                {activeSection === 'artists' && (
                    <section className={styles.containerArtists}>
                        <Artist
                            name="AC/DC"
                            img="logo.png"
                        />
                    </section>
                )}

                {activeSection === 'songs' && (
                    <section className={styles.containerSongs}>
                        <iframe
                            style={{ borderRadius: '12px' }}
                            src="https://open.spotify.com/embed/track/07q0QVgO56EorrSGHC48y3?utm_source=generator"
                            width="100%"
                            height="152"
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy">
                        </iframe>
                    </section>
                )}
            </section>

            <section className={styles.community}>
                <h2 className={styles.title}>My community's:</h2>

                <section className={styles.containerArtists}>
                    <Artist
                        name="AC/CD"
                        img="logo.png"
                    />

                </section>
            </section>

            <section className={styles.discovery}>
                <h2 className={styles.title}>My discovery's:</h2>

                <section className={styles.containerArtists}>
                    <Artist
                        name="AC/CD"
                        img="logo.png"
                    />

                </section>
            </section>

            <ul>
                <nav>

                </nav>
            </ul>
        </>
    );
}

export default Home;