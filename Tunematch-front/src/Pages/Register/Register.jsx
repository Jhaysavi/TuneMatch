import InputGroup from '../../Components/InputGroup/InputGroup';
import styles from './Register.module.css';
import Button from '../../Components/Button/Button';


function Register() {
    return (
        <>
            <h2 className={styles.title}>Register</h2>

            <form action="#" className={styles.form}>
                <InputGroup
                    nameLabel="Name"
                    name="name"
                    type="text"
                />

                <InputGroup
                    nameLabel="Nickname"
                    name="nickname"
                    type="text"
                />

                <InputGroup
                    nameLabel="Email"
                    name="email"
                    type="email"
                />

                <InputGroup
                    nameLabel="Password"
                    name="password"
                    type="password"
                />

                <InputGroup
                    nameLabel="Repeat your password"
                    name="password2"
                    type="password"
                />

                <Button 
                    name="Next"
                />
            </form>
        </>
    );
}

export default Register;