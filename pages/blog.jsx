import { useEffect } from 'react';

import { PostCard } from '../src/components/postCard';

import { getAllPosts } from '../src/scripts/getAllPosts';

import styles from '../styles/pages/Blog.module.css';

export default function Blog({ posts }) {
  useEffect(() => {
    // GAMBIARRA PARA ARRUMAR O BUG DA VERSÃO MOBILE DO BLOG - CARA, ARRUMA ISSO PQP
    if (document.getElementById('__next-build-watcher').style) {
      var count = 0;
      while (count < 50) {
        document.getElementById('__next-build-watcher').style.display = 'none';
        document.getElementById('__next-build-watcher').style.display = 'block';
        count++;
      }
    }
  });

  return (
    <main id="blog" className={styles.blogContainer}>
      <div className={styles.blog}>
        <h1>blog</h1>

        <main className={styles.postsContainer}>
          <section className={styles.posts}>
            {posts.map((post, index) => {
              return (
                <PostCard
                  key={index}
                  title={post.title}
                  date={post.date}
                  excerpt={post.excerpt}
                  slug={post.slug}
                />
              );
            })}
          </section>
        </main>
      </div>
    </main>
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

  return {
    props: {
      posts,
    },
  };
}
