import Image from 'next/image';
import Link from 'next/link';
import styles from './Tile.module.css';
import { useState } from 'react';

const Tile = ({ href, src, alt, text }) => {
  const [isFavourite, setIsFavourite] = useState(false);

  const toggleFavourite = () => {
    setIsFavourite(!isFavourite);
  };

  return (
    <div className={styles.tile}>
      <Link href={href}>
        <div className={styles.imageContainer}>
          <Image src={src} alt={alt} width={325} height={325} />
        </div>
      </Link>
      <div className={styles.overlay}>
        <p className={styles.overlayText}>{text}</p>
      </div>
      <div className={styles.favouriteButton} onClick={toggleFavourite}>
        <div className={styles.favouriteButtonInner}></div>
        {isFavourite ? '❤️' : '🤍'}
      </div>
    </div>
  );
};

export default Tile;
