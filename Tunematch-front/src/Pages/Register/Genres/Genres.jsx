import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import Genre from '../../../Components/Genre/Genre';
import styles from './Genres.module.css';
import Button from '../../../Components/Button/Button';

const genresList = [
    { name: 'Rock', img: '/src/assets/rock.jpg' },
    { name: 'Pop', img: '/src/assets/pop.jpg' },
    { name: 'Jazz', img: '/src/assets/jazz.jpg' },
    { name: 'Hip-Hop', img: '/src/assets/hiphop.jpg' },
    { name: 'Classical', img: '/src/assets/classical.jpg' },
    { name: 'Electronic', img: '/src/assets/electronic.jpg' },
];

function Genres() {
    const [selectedGenres, setSelectedGenres] = useState([]);
    const navigate = useNavigate(); 

    const handleGenreClick = (genreName) => {
        if (selectedGenres.includes(genreName)) {
            setSelectedGenres(selectedGenres.filter((g) => g !== genreName));
        } else {
            setSelectedGenres([...selectedGenres, genreName]);
        }
    };

    const handleNext = () => {
        localStorage.setItem('selectedGenres', JSON.stringify(selectedGenres));
        navigate('/artists');
    };

    return (
        <div className={styles.main}>
            <h1 className={styles.title}>Select your favorite music genres!</h1>

            <section className={styles.container}>
                {genresList.map((genre) => (
                    <Genre
                        key={genre.name}
                        name={genre.name}
                        img={genre.img}
                        isSelected={selectedGenres.includes(genre.name)}
                        onClick={() => handleGenreClick(genre.name)}
                    />
                ))}
            </section>

            <Button
                name="Next"
                onClick={handleNext}
            />
        </div>
    );
}

export default Genres;
