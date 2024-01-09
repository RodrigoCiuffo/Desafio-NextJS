import Header from '@/components/header';
import styles from './index.module.css';
import '../styles/globals.css';
import Footer from '@/components/footer';
import HomePage from './home';
import Game from './game';
import Form from './form';
import Post from './blog';
import client from '../sanityClient';
import PostPage from './blog/blogPost'

export async function getStaticProps() { //Função para captar os dados do sanity via ID
    try {
        const documento = await client.getDocument('a895ab95-3fe0-49cb-a6ab-527ac679f719');
        const card1 = await client.getDocument('24741b5b-a4e8-4e95-9a32-096be2fd6e0b');
        const card2 = await client.getDocument('49892021-ef3b-4d8f-ad96-cd81440ec720');
        const card3 = await client.getDocument('28a183a3-03a6-46e9-96f1-8f0078b84a76');
        const card4 = await client.getDocument('9ddfbc6c-f018-4741-87b7-55386657a38c');
        const card5 = await client.getDocument('9460aa37-b8e4-44b0-9d7f-99ea81db477e');
        const postData = await client.getDocument('4640f847-f217-4154-8de6-4c3c7253f48c');
        const postText = await client.getDocument('8ea72801-eb6a-49ee-a82b-c4ed6927fb9c');
        return {
            props: {
                documento,
                postData,
                postText,
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

// Estrutura principal do projeto abaixo
export default function LandingPage({ documento, cards, postData, postText }) { //Props de dados coletados via Sanity passadas para os componentes
    return (
        <div className={styles.container}>
            <Header />
            <main className={styles.main}>
                <div className={styles.mainContent}>
                    <HomePage />
                    <Game />
                    <Form />
                    <Post documento={documento} cards={cards} />
                    <PostPage postData={postData} postText={postText} />
                </div>
            </main>
            <Footer />
        </div>
    );
}