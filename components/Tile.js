import Link from 'next/link';
import Image from 'next/image';
import styles from './Tile.module.css';

const Tile = ({ href, src, alt, text }) => {
  return (
    <Link legacyBehavior href={href}>
      <a className={styles.tile}>
        <div className={styles.imageContainer}>
          <Image src={src} alt={alt} width={325} height={325} />
          <div className={styles.overlay}>
          <p className={styles.overlayText}>{text}</p>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default Tile;
