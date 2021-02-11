import { useRouter } from 'next/router';

import PropTypes from 'prop-types';

import styles from '../../styles/components/PostCard.module.css';

export function PostCard({ title, date, excerpt, slug, handleClick }) {
  const router = useRouter();

  return (
    <div
      className={styles.postCard}
      onClick={() => {
        router.push('blog/' + slug);
        handleClick();
      }}
    >
      <h1>{title}</h1>
      <span>{date}</span>
      <p>{excerpt}</p>
    </div>
  );
}

PostCard.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  excerpt: PropTypes.string,
  slug: PropTypes.string,
  handleClick: PropTypes.func,
};
