import Tile from './Tile';
import styles from './Tile.module.css';

const tilesData = [
  {
    id: 1,
    src: '/tile-images/Amsterdam.jpg',
    alt: 'Example 1',
    href: '/example1',
    text: 'AMSTERDAM',
  },
  {
    id: 2,
    src: '/tile-images/Istanbul.jpg',
    alt: 'Example 2',
    href: '/example2',
    text: 'ISTANBUL',
  },
  {
    id: 3,
    src: '/tile-images/Miami1.jpeg',
    alt: 'Example 3',
    href: '/example3',
    text: 'MIAMI',
  },
  {
    id: 4,
    src: '/tile-images/paris.jpeg',
    alt: 'Example 3',
    href: '/example3',
    text: 'PARIS',
  },
  {
    id: 5,
    src: '/tile-images/tokyo.jpeg',
    alt: 'Example 3',
    href: '/example3',
    text: 'TOKYO',
  },
  {
    id: 6,
    src: '/tile-images/Toronto.jpg',
    alt: 'Example 3',
    href: '/example3',
    text: 'TORONTO',
  },
  {
    id: 7,
    src: '/tile-images/Hawaii.jpg',
    alt: 'Example 3',
    href: '/example3',
    text: 'HAWAII',
  },
  {
    id: 8,
    src: '/tile-images/London.jpeg',
    alt: 'Example 3',
    href: '/example3',
    text: 'LONDON',
  }
];

const TileGrid = () => {
  return (
    <div className={styles.container}>
      {tilesData.map(tile => (
        <Tile
          key={tile.id}
          href={tile.href}
          src={tile.src}
          alt={tile.alt}
          text={tile.text}
        />
      ))}
    </div>
  );
};

export default TileGrid;

