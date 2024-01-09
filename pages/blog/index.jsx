import styles from './index.module.css';
import client from '../../sanityClient';
import BlogCard from '../../src/components/blogposts'
import { useRouter } from 'next/router';
import Header from '@/components/header';
import Footer from '@/components/footer';

export async function getStaticProps() { 
    try { //Função de captação dos dados do Sanity para que os dados sejam acessíveis na rota específica
        const documento = await client.getDocument('a895ab95-3fe0-49cb-a6ab-527ac679f719');
        const card1 = await client.getDocument('24741b5b-a4e8-4e95-9a32-096be2fd6e0b');
        const card2 = await client.getDocument('49892021-ef3b-4d8f-ad96-cd81440ec720');
        const card3 = await client.getDocument('28a183a3-03a6-46e9-96f1-8f0078b84a76');
        const card4 = await client.getDocument('9ddfbc6c-f018-4741-87b7-55386657a38c');
        const card5 = await client.getDocument('9460aa37-b8e4-44b0-9d7f-99ea81db477e');
        return {
            props: {
                documento,
                cards: [card1, card2, card3, card4, card5],
            },
        };
    } catch (err) {
        console.log('Erro ao obter dados do Sanity:', err);
        return {
            props: {
                err: 'Erro ao obter dados do Sanity',
            },
        };
    }
}

const Post = ({ documento, cards }) => {
    // Não consegui captar a imagem através do fetching, os dados chegavam mas ela simplesmente não carregava
    // Portanto, optei por fazer de forma mais direta, como abaixo:
    const imageUrl = 'https://cdn.sanity.io/images/1h0aqla8/production/5e9ded8c61e6f07245577e7cd25bc1f82c39a8b4-610x339.png?w=2000&amp;'
    const router = useRouter()

    return (
        <div className={router.pathname === '/blog' ? styles.blogMainSec : ''}>
            {router.pathname === '/blog' ? <Header /> : null}
            <section className={router.pathname === '/blog' ? styles.moveSection : styles.blogSection}>
                <section className={styles.postSec}>
                    <h1 className={styles.secTitle}>BLOG</h1>
                    <section className={styles.content}>
                        <img src={imageUrl} className={styles.imagem} alt='Video-Games retrô'/>
                        <div className={styles.dataContainer}>
                            <h2 className={styles.postTitle}>{documento.title}</h2> {/* Dados inseridos em suas respectivas posições */}
                            <p className={styles.author}>{documento.author}</p>
                            <p className={styles.body}>{documento.body}
                            </p>
                        </div>
                    </section>
                </section>
                <section className={styles.cardSec}>
                    <BlogCard id={cards[0]} /> {/* Cards inseridos em suas respectivas posições, conforme o Figma */}
                    <BlogCard id={cards[1]} />
                    <BlogCard id={cards[2]} />
                    <BlogCard id={cards[3]} />
                    <BlogCard id={cards[4]} />
                </section>
            </section>
            {router.pathname === '/blog' ? <Footer /> : null}
        </div>
    );
};

export default Post;