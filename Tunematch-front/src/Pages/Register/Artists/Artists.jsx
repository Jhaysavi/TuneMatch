import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Artist from '../../../Components/Artist/Artist';
import styles from './Artists.module.css';
import Button from '../../../Components/Button/Button';

const artistsByGenre = {
    Rock: [
        { name: 'Slipknot', img: '/src/assets/slipknot.jpg' },
        { name: 'Foo Fighters', img: '/src/assets/foo-fighters.jpg' },
    ],
    Pop: [
        { name: 'Taylor Swift', img: '/src/assets/taylor-swift.jpg' },
        { name: 'Ariana Grande', img: '/src/assets/ariana-grande.jpg' },
    ],
    Jazz: [
        { name: 'Miles Davis', img: '/src/assets/miles-davis.jpg' },
        { name: 'John Coltrane', img: '/src/assets/john-coltrane.jpeg' },
    ],
    'Hip-Hop': [
        { name: 'Kendrick Lamar', img: '/src/assets/kendrick-lamar.jpg' },
        { name: 'Drake', img: '/src/assets/drake.jpg' },
    ],
    Classical: [
        { name: 'Ludwig van Beethoven', img: '/src/assets/beethoven.jpg' },
        { name: 'Johann Sebastian Bach', img: '/src/assets/bach.jpg' },
    ],
    Electronic: [
        { name: 'Daft Punk', img: '/src/assets/daft-punk.jpg' },
        { name: 'Deadmau5', img: '/src/assets/deadmau5.jpg' },
    ],
};

function Artists() {
    const [selectedArtists, setSelectedArtists] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const storedGenres = JSON.parse(localStorage.getItem('selectedGenres'));
        if (!storedGenres) {
            navigate('/genres');
        }
    }, [navigate]);

    const handleArtistClick = (artistName) => {
        if (selectedArtists.includes(artistName)) {
            setSelectedArtists(selectedArtists.filter((a) => a !== artistName));
        } else {
            setSelectedArtists([...selectedArtists, artistName]);
        }
    };

    const handleFinish = () => {
        localStorage.setItem('selectedArtists', JSON.stringify(selectedArtists));
        navigate('/suggestions');
    };

    const storedGenres = JSON.parse(localStorage.getItem('selectedGenres')) || [];

    return (
        <section className={styles.main}>
            <h1 className={styles.title}>Select the artists that you like.</h1>
            <h4 className={styles.subtitle}>You can add more to your favorites later.</h4>

            {storedGenres.map((genre) => (
                <div key={genre}>
                    <h2 className={styles.genreTitle}>{genre}</h2>
                    <section className={styles.container}>
                        {artistsByGenre[genre].map((artist) => (
                            <Artist
                                key={artist.name}
                                img={artist.img}
                                name={artist.name}
                                isSelected={selectedArtists.includes(artist.name)}
                                onClick={() => handleArtistClick(artist.name)}
                            />
                        ))}
                    </section>
                </div>
            ))}

            <Button 
                name="Finish"
                onClick={handleFinish}
            />
        </section>
    );
}

export default Artists;
