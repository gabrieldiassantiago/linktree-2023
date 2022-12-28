import Image from 'next/image';
import styles from '../styles/Page.module.scss';
import logo from '../src/logo.svg'
import { FaDiscord, FaFacebook, FaGithub, FaInstagram, FaMailBulk } from 'react-icons/fa';
import avatar from '../src/gab.webp';

export default function Page() {
    return (
        <div className={styles.container}>
        <Image className={styles.logotipo} src={avatar} alt="Logo" />
        <div className={styles.containertexto}>
            <h1>Gabriel Dias Santigo</h1>
            <span>Designer UI/UX e Desenvolvedor front-end 😊</span>
        </div>
        <div className={styles.links}>
            <button className={styles.buttondiscord}><FaDiscord size={20} /> <a target="_blank" rel="noreferrer" href="">Discord</a></button>
            <button className={styles.buttongithub}><FaGithub size={20} /> <a target="_blank" rel="noreferrer" href="https://github.com/gabrieldiassantiago">Github</a></button>
            <button className={styles.buttonfacebook}><FaFacebook size={20} /> <a target="_blank" rel="noreferrer" href="https://www.facebook.com/gabrieldiassantiago09/">Facebook</a></button>
            <button className={styles.buttoninstagram}><FaInstagram size={20} /> <a  target="_blank" rel="noreferrer" href="https://www.instagram.com/_dias17y/">Instagram</a></button>
            <button className={styles.buttonemail}><FaMailBulk size={20} /><a target="_blank" rel="noreferrer" href="">Meu email</a></button>

        </div>
        </div>
    )
} 