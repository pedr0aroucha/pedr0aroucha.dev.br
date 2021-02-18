import { useRouter } from 'next/router';

import { getAllPosts } from '../src/scripts/getAllPosts';

import styles from '../styles/pages/Home.module.css';

export default function Home({ title, slug }) {
  const router = useRouter();

  return (
    <div className={styles.home}>
      <img src="https://github.com/pedr0aroucha.png" />
      <h1>Pedro Aroucha</h1>
      <p>
        Desenvolvo e crio soluções de forma rápida, simplificada, funcional e
        eficiente que facilitam sua vida !!!
      </p>
      <ul>
        <li onClick={() => router.push(`/post/hello-world`)}> Hello World </li>
        <li onClick={() => router.push(`/post/${slug}`)}> {title}</li>{' '}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts();

  const posts = allPosts.map((post) => {
    return {
      title: post.metadata.title,
      date: post.metadata.date,
      excerpt: post.metadata.excerpt,
      slug: post.metadata.slug,
    };
  });

  const { title, slug } = posts[posts.length - 1];

  return {
    props: {
      title,
      slug,
    },
  };
}
