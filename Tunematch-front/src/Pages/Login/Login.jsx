import Button from '../../Components/Button/Button';
import styles from './Login.module.css';

function Login() {
    return(
        <>
            <img src="logo.png" className={styles.logo} alt="TuneMatch logo" />

            <h2 className={styles.title}>Login</h2>

            <form action="#" className={styles.form}>
                <fieldset className={styles.inputGroup}>
                    <label htmlFor="email" className={styles.label}>Email:</label>
                    <input type="email" id='email' className={styles.input} placeholder='Email@example.com' />
                </fieldset>

                <fieldset className={styles.inputGroup}>
                    <label htmlFor="password" className={styles.label}>Password:</label>
                    <input type="password" className={styles.input} id='password' />
                </fieldset>

                <Button 
                    name= 'Login'
                />
            </form>

            <section className={styles.container}>
                <p>Dosen’t have a account?</p>
                <a className={styles.register} href="#">Register</a>
            </section>
        </>
    );
}

export default Login;