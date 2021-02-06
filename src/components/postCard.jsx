import PropTypes from 'prop-types';

import styles from '../../styles/components/PostCard.module.css';

export function PostCard({ title, date, excerpt, content, handleClick }) {
  return (
    <div className={styles.postCard} onClick={handleClick}>
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
  content: PropTypes.string,
  handleClick: PropTypes.func,
};
