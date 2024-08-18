import React, { useState } from 'react';
import styles from './Home.module.css';
import Artist from '../../Components/Artist/Artist';
import { MdHome } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { FaBell } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";

function Home() {
    const [activeSection, setActiveSection] = useState('songs');

    const similarArtists = [
        { name: 'Indie Artist 1', img: '/src/assets/artist1.jpg' },
        { name: 'Indie Artist 2', img: '/src/assets/artist2.jpg' },
        { name: 'Indie Artist 3', img: '/src/assets/artist3.jpg' },
    ];

    const communityArtists = [
        { name: 'Community 1', img: '/src/assets/community1.jpg' },
        { name: 'Community 2', img: '/src/assets/community2.jpg' },
    ];

    const recentDiscoveries = [
        { name: 'Discovery Artist 1', img: '/src/assets/artist4.jpg' },
        { name: 'Discovery Artist 2', img: '/src/assets/artist1.jpg' },
    ];

    return (
        <>
            <section className={styles.suggestions}>
                <h2 className={styles.title}>Suggestions:</h2>
                <button className={styles.btn} onClick={() => setActiveSection('songs')}>
                    Songs
                </button>
                <button className={styles.btn} onClick={() => setActiveSection('artists')}>
                    Artists
                </button>

                {activeSection === 'artists' && (
                    <section className={styles.containerArtists}>
                        {similarArtists.map((artist, index) => (
                            <Artist
                                key={index}
                                name={artist.name}
                                img={artist.img}
                            />
                        ))}
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

                        <iframe
                            style={{ borderRadius: '12px' }}
                            src="https://open.spotify.com/embed/track/7nzsY8vlnKdvGOEE0rjAXZ?utm_source=generator"
                            width="100%" height="152"
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy">
                        </iframe>
                    </section>
                )}
            </section>

            <section className={styles.community}>
                <h2 className={styles.title}>My community's:</h2>

                <section className={styles.containerArtists}>
                    {communityArtists.map((artist, index) => (
                        <Artist
                            key={index}
                            name={artist.name}
                            img={artist.img}
                        />
                    ))}
                </section>
            </section>

            <section className={styles.discovery}>
                <h2 className={styles.title}>My discovery's:</h2>

                <section className={styles.containerArtists}>
                    {recentDiscoveries.map((artist, index) => (
                        <Artist
                            key={index}
                            name={artist.name}
                            img={artist.img}
                        />
                    ))}
                </section>
            </section>

            <footer className={styles.footer}>
                <ul className={styles.container}>
                    <li><a href="#" className={styles.icons}><MdHome /></a></li>
                    <li><a href="#" className={styles.icons}><IoSearch /></a></li>
                    <li><a href="#" className={styles.icons}><FaBell /></a></li>
                    <li><a href="#" className={styles.icons}><IoPerson /></a></li>
                </ul>
            </footer>
        </>
    );
}

export default Home;
