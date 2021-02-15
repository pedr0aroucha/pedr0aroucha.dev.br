import { useEffect, useState } from 'react';

import Link from 'next/link';

import parse from 'html-react-parser';

import { getAllPosts } from '../../src/scripts/getAllPosts';

import styles from '../../styles/pages/PostItem.module.css';

export default function PostItem({ targetPost }) {
  const [isMounted, setIsMounted] = useState();

  useEffect(() => {
    setIsMounted(true);
  });

  if (!isMounted) return null;

  return (
    <div className={styles.postItem}>
      <main>
        <Link href="/blog">Voltar</Link>
        <div>
          <img src="https://github.com/pedr0aroucha.png" />
          <p>
            <span>Pedro Aroucha</span>
            <a href="https://instagram.com/pedr0aroucha" target="_blank">
              @pedr0aroucha
            </a>
          </p>
        </div>
        <h1>{targetPost.metadata.title}</h1>
        <h3>{targetPost.metadata.excerpt}</h3>
        <h5>{targetPost.metadata.date}</h5>
        <section>{parse(targetPost.content)}</section>
      </main>
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
