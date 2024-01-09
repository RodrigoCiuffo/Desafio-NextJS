import styles from './index.module.css';
import Link from 'next/link';

const BlogCard = ({ id }) => { //Prop para especificar qual BlogCard deve ser inserido

    const imageUrl = 'https://cdn.sanity.io/images/1h0aqla8/production/22f81316d8e5fd3b3b4447cee5fd31e87993dab7-390x220.png'
    return (
        <Link href={'/blog/blogPost'}><div className={styles.blogCard}>
            <img src={imageUrl} className={styles.cardImg} alt='PostCard Image'/>
            <h1 className={styles.cardTitle}>{id.title}</h1>
        </div>
        </Link>
    );
};

export default BlogCard;