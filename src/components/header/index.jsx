import React, { useState } from 'react';
import styles from './index.module.css';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Header = () => {
    const [activeItem, setActiveItem] = useState('career');

    const router = useRouter();

    const handleItemClick = (item, route) => { //Função para associar o roteamento Next aos itens do Menu
        setActiveItem(item); //Esse trecho em específico torna laranja o fundo do item ativo, como no modelo do Figma
        if (route === '/form' || route === '/blog') {
            router.push(route);
        }
    };

    return (
        <header className={styles.head}>
            <div className={styles.center}>
                <div className={styles.logoContainer}>
                    <Link href={'/'}><img src="/logo container.png" className={styles.jojos} alt='logo'/></Link>
                </div> {/* Achei interessante adicionar o link do index principal (Landing Page) à Logo */}
                <ul className={styles.menu}>
                    <Link href={'/#games'}>
                        <li
                            className={`${styles.jogos} ${activeItem === 'jogos' ? styles.active : ''}`}
                            onClick={() => handleItemClick('jogos', '/game')}
                        > {/* Eventos onClick acionando a função para mudança de estado e/ou rota */}
                            Jogos
                        </li>
                    </Link>
                    <Link href={'/#about'}>
                        <li
                            className={`${styles.about} ${activeItem === 'about' ? styles.active : ''}`}
                            onClick={() => handleItemClick('about', '/home')}
                        >
                            Sobre
                        </li>
                    </Link>
                    <li
                        className={`${styles.blog} ${activeItem === 'blog' ? styles.active : ''}`}
                        onClick={() => handleItemClick('blog', '/blog')}
                    >
                        Blog
                    </li>
                    <li
                        className={`${styles.career} ${activeItem === 'career' ? styles.active : ''}`}
                        onClick={() => handleItemClick('career', '/form')}
                    >
                        Carreira
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;