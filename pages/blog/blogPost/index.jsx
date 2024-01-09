import styles from './index.module.css';
import client from '../../../sanityClient';
import { useRouter } from 'next/router';
import Header from '@/components/header';
import Footer from '@/components/footer';

export async function getStaticProps() {
    try {
        const postData = await client.getDocument('4640f847-f217-4154-8de6-4c3c7253f48c');
        const postText = await client.getDocument('8ea72801-eb6a-49ee-a82b-c4ed6927fb9c');
        return {
            props: {
                postData,
                postText
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

const PostPage = ({ postData, postText }) => { //Dados captados através do Sanity passados via Props

    const router = useRouter()

    const imageUrl = 'https://cdn.sanity.io/images/1h0aqla8/production/0bbd4483db7fb66885909e600ab051f225e84efa-1240x368.png'
    return (
        <section className={router.pathname === '/blog/blogPost' ? styles.pageMoved : styles.postPageSec}>
            {router.pathname === '/blog/blogPost' ? <Header className={styles.headerPosition} /> : null}
            <img alt='Video-Games retrô' src={imageUrl} className={router.pathname === '/blog/blogPost' ? styles.postPageImage : styles.postPageImg} />
            <h1 className={router.pathname === '/blog/blogPost' ? styles.postPageTitlePath : styles.postPageTitle}>{postData.title}</h1>
            <p className={router.pathname === '/blog/blogPost' ? styles.postPageAuthorPath : styles.postPageAuthor}>{postData.author}</p>
            {/* Montei os parágrafos e o schema do componente sanity dessa forma para conseguir dispor o texto em tela conforme o modelo do Figma */}
            <p className={router.pathname === '/blog/blogPost' ? styles.lastPostContentPath : styles.lastPostContent}>{postText.p1}</p>
            <p className={router.pathname === '/blog/blogPost' ? styles.lastPostContentPath : styles.lastPostContent}>{postText.p2}</p>
            <p className={router.pathname === '/blog/blogPost' ? styles.lastPostContentPath : styles.lastPostContent}>{postText.p3}</p>
            <p className={router.pathname === '/blog/blogPost' ? styles.lastPostContentPath : styles.lastPostContent}>{postText.p4}</p>
            <p className={router.pathname === '/blog/blogPost' ? styles.lastPostContentPath : styles.lastPostContent}>{postText.p5}</p>
            <p className={router.pathname === '/blog/blogPost' ? styles.lastPostContentPathEnd : styles.lastPostContent}>{postText.p6}</p>
            {router.pathname === '/blog/blogPost' ? <Footer className={styles.headerPosition} /> : null}
        </section>
    );
};

export default PostPage;


