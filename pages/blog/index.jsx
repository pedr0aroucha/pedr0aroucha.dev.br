import { useRouter } from 'next/router';
import { useState } from 'react';

import { PostCard } from '../../src/components/postCard';
import { Loader } from '../../src/components/patterns/Loader';

import { getAllPosts } from '../../src/scripts/getAllPosts';

import styles from '../../styles/pages/Blog.module.css';

export default function Blog({ posts }) {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState();

  function redirectToPost(slug) {
    router.push('blog/' + slug);
    setIsLoading(true);
    document.getElementById('blog').style.cursor = 'progress';
    document.querySelector('body').style.overflow = 'hidden';
  }

  return (
    <main id="blog" className={styles.blogContainer}>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={styles.blog}>
          <h1>blog</h1>

          <main className={styles.postsContainer}>
            <section className={styles.posts}>
              {posts.map((post, index) => {
                return (
                  <PostCard
                    key={index}
                    title={post.metadata.title}
                    date={post.metadata.date}
                    excerpt={post.metadata.excerpt}
                    url={`blog/${post.metadata.slug}`}
                    content={post.content}
                    handleClick={() => redirectToPost(post.metadata.slug)}
                  />
                );
              })}
            </section>
          </main>
        </div>
      )}
    </main>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts();

  return {
    props: {
      posts,
    },
  };
}
