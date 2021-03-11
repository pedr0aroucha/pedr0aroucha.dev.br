import { useRouter } from 'next/router';

import PropTypes from 'prop-types';

import styles from '../../styles/components/PostCard.module.css';

export function PostCard({ title, date, excerpt, slug }) {
  const router = useRouter();

  return (
    <div
      className={styles.postCard}
      id="postCard"
      onClick={() => {
        window.location.href = '/post/' + slug;
      }}
    >
      <h1>{title}</h1>
      <span>{date}</span>

      <figure>
        <img src="/images/52338123.jfif" />
        <figcaption>Pedro Aroucha</figcaption>
      </figure>
      <p>{excerpt}</p>
    </div>
  );
}

PostCard.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  excerpt: PropTypes.string,
  slug: PropTypes.string,
};
