import React from 'react';
import styles from './index.module.css';
import { useRouter } from 'next/router';
import Header from '@/components/header';
import Footer from '@/components/footer';

const Game = () => {

    const router = useRouter();
    
    return (
        <div className={styles.mainGameDiv}>
            { router.pathname === '/game' ? <Header className={styles.headerPosition} /> : null }
            <section className={router.pathname === '/game' ? styles.moveSection : styles.gameSection}>
                <h1 className={router.pathname === '/game' ? styles.pacmanTitleMoved : styles.pacmanTitle}>Pacman</h1>
                <img src="/bigPac.png" className={styles.singleImg} alt='Pacman game image'/>
                <div className={styles.purchase}>
                    <p className={styles.value}>Valor: R$ 10,00</p>
                    <div className={styles.purchaseButton}>Comprar</div>
                </div>
                <article className={router.pathname === '/game' ? styles.descriptionPath : styles.description}>
                    <p className={styles.firstParagraph}>Pac-Man é um clássico jogo de arcade lançado em 1980. Os jogadores assumem o controle de Pac-Man, um personagem<br /> amarelo redondo, e seu objetivo é comer todos os pontos em um labirinto enquanto evita os fantasmas coloridos que o<br /> perseguem. Ao comer pontos especiais, os fantasmas se tornam vulneráveis e podem ser engolidos por Pac-Man para<br /> ganhar pontos extras. Com sua jogabilidade simples e viciante, Pac-Man conquistou milhões de jogadores e se tornou um<br /> fenômeno cultural, com seu personagem e design visual se tornando ícones da cultura pop.<br /></p>
                    <p className={styles.midParagraph}>Em Pac-Man, os jogadores precisam mostrar habilidades rápidas de raciocínio e estratégia para evitar os fantasmas<br /> enquanto procuram o caminho ideal pelo labirinto. Além dos pontos regulares, bônus e frutas especiais aparecem em<br /> momentos-chave, adicionando uma dose extra de emoção e recompensa ao jogo. Com seu design cativante e desafios<br /> envolventes, Pac-Man oferece uma experiência divertida e nostálgica, capaz de entreter jogadores de todas as idades.<br /></p>
                    <p className={styles.thirdParagraph}>Desde seu lançamento, Pac-Man transcendeu os arcades e se tornou um verdadeiro ícone da cultura pop. Sua popularidade<br /> perdura até hoje, com referências em várias formas de mídia e uma base de fãs apaixonada. Se você está em busca de uma<br /> aventura eletrizante e viciante, não perca a chance de jogar Pac-Man e experimentar a diversão atemporal que conquistou o<br /> mundo dos videogames. Prepare-se para embarcar em uma jornada emocionante enquanto come pontos, evita fantasmas<br /> e mergulha em um dos jogos mais adorados de todos os tempos.</p>
                </article>
            </section>
            { router.pathname === '/game' ? <Footer className={styles.footerPosition} /> : null }
        </div>
    );
}

export default Game;