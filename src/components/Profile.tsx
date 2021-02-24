import styles from '../styles/components/Profile.module.css';

export function Profile () {
    return(
        <div className={ styles.profileContainer }>
            <img src="https://github.com/reingaw.png" alt="avatar" />
            <div>
                <strong>Wagner Andrade</strong>
                <p>
                    <img src="icons/level.svg" alt="level" />
                    Level 1
                </p>
            </div>
        </div>
    )
}