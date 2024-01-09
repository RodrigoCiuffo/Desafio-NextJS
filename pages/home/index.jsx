import React from 'react';
import styles from './index.module.css';
import CareerCard from '@/components/career card';
import { useRouter } from 'next/router';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Link from 'next/link';

const HomePage = () => {

    const router = useRouter();

    return (
        <div className={styles.homeContainer}>
            {/* Fiz uso de condição ternária para adicionar Header e Footer a depender da rota atual */}
            {router.pathname === '/home' ? <Header className={styles.headerPosition} /> : null}
            <div className={router.pathname === '/home' ? styles.home : styles.container}>
                <section className={styles.section} id="games">
                    <Link href={'/game'}><img alt='Pacman Large' src="/bigPac.png" className={styles.bigPac} /></Link>
                    <div className={styles.carrossel}>
                        <Link href={'/game'}><img alt='Pacman Left' src="/leftPac.png" className={styles.leftPac} /></Link>
                        <Link href={'/game'}><img alt='Pacman Middle' src="/middlePac.png" className={styles.middlePac} /></Link>
                        <Link href={'/game'}><img alt='Pacman Right' src="/rightPac.png" className={styles.rightPac} /></Link>
                    </div>
                </section>
                {/* Em alguns casos, também utilizei para definição de estilos a depender da rota atual */}
                <h1 className={router.pathname === '/home' ? styles.aboutTitleHome : styles.aboutTitle} id='about'>Sobre Nós</h1>
                <section className={styles.about}>
                    <p className={styles.aboutText}>
                        <span className={styles.indent}>Bem-vindo à Jojos, uma empresa de jogos retrô brasileira!</span> Somos uma equipe apaixonada por games clássicos e<br /> estamos comprometidos em trazer de volta a magia desses<br /> títulos que marcaram época. Com gráficos pixelizados, trilhas<br /> sonoras envolventes e mecânicas desafiadoras, nossos jogos<br /> são verdadeiras homenagens aos consoles e computadores<br /> que encantaram o passado. Junte-se a nós e embarque em<br /> uma viagem nostálgica repleta de aventuras.<br /><br />
                        <span className={styles.indent}>Acreditamos que os jogos retrô têm o poder de unir</span> gerações, despertar memórias afetivas e proporcionar<br /> momentos de pura diversão. Nossa missão é manter viva a<br /> essência dos jogos clássicos, levando você a uma jornada<br /> inesquecível pelos mundos pixelizados cheios de magia. Faça<br /> parte dessa nova era retrô e mergulhe em experiências que<br /> continuam a encantar corações até hoje.<br /><br />
                        <span className={styles.indent}>Jojos, onde a nostalgia encontra a diversão! Com uma</span> equipe apaixonada por games, estamos comprometidos em<br /> trazer de volta a magia dos jogos clássicos que marcaram<br /> gerações inteiras. Explore nossos jogos e embarque em uma<br /> viagem nostálgica repleta de aventuras e desafios. Junte-se<br /> a nós e compartilhe da nossa paixão pelos jogos retrô!
                    </p>
                    <img src="/aboutImg.png" className={styles.fliperama} alt='Fliperama'/>
                </section>
                <section className={styles.proCard}>
                    <h1 className={styles.carreira}>Carreira</h1>
                    {/* Cards de carreira e suas props sendo enviadas ao componente */}
                    <div className={styles.cardArea}>
                        <CareerCard cargo="Desenvolvedor C++ Júnior" area="DEV" workspace="Remoto" />
                        <CareerCard cargo="Desenvolvedor C++ Pleno" area="DEV" workspace="Remoto" />
                        <CareerCard cargo="Engenheiro de Software" area="Engenheiro" workspace="Remoto" />
                        <CareerCard cargo="Artista Técnico" area="Arte" workspace="Remoto" />
                        <CareerCard cargo="Representante Comercial" area="Comercial" workspace="Presencial" />
                    </div>
                </section>
            </div>
            {router.pathname === '/home' ? <Footer className={styles.footerPosition} /> : null}
        </div>
    );
}

export default HomePage;