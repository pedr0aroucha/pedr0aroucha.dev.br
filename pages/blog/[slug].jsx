import { useEffect } from 'react';

import ReactHtmlParser from 'react-html-parser';

import { getAllPosts } from '../../src/scripts/getAllPosts';

import styles from '../../styles/pages/PostItem.module.css';

export default function PostItem({ targetPost }) {
  useEffect(() => {
    document.querySelector('body').style.overflow = 'scroll';
  });

  return (
    <div className={styles.postItem}>
      <h1>{targetPost.metadata.title}</h1>
      <h3>{targetPost.metadata.excerpt}</h3>
      <h5>{targetPost.metadata.date}</h5>
      <section>{ReactHtmlParser(targetPost.content)}</section>
    </div>
  );
}

export async function getStaticProps({ params }) {
  const targetPost = getAllPosts().filter(
    (post) => post.metadata.slug === params.slug
  );
  return {
    props: { targetPost: targetPost[0] },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts();

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.metadata.slug,
        },
      };
    }),
    fallback: false,
  };
}
