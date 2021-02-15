import { PostCard } from '../src/components/postCard';

import { getAllPosts } from '../src/scripts/getAllPosts';

import styles from '../styles/pages/Blog.module.css';

export default function Blog({ posts }) {
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
