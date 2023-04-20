import Link from 'next/link';
import Image from 'next/image';
import styles from './Tile.module.css';

const Tile = ({ href, src, alt, Text }) => {
  return (
    <Link legacyBehavior href={""}>
      <a className={styles.tile}>
        <div className={styles.imageContainer}>
          <Image src={src} alt={alt} width={325} height={325} />
          <div className={styles.overlay}>
          <p className={styles.overlayText}>{Text}</p>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default Tile;
