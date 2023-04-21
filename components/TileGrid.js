import Tile from './Tile';
import styles from './Tile.module.css';

const tilesData = [
  {
    id: 1,
    src: '/tile-images/Amsterdam.jpg',
    alt: 'Example 1',
    href: '/profile',
    text: 'AMSTERDAM - 3 Days',
  },
  {
    id: 2,
    src: '/tile-images/Istanbul2.jpg',
    alt: 'Example 2',
    href: '/itinerary',
    text: 'ISTANBUL - 4 Days',
  },
  {
    id: 3,
    src: '/tile-images/Miami1.jpeg',
    alt: 'Example 3',
    href: '/example3',
    text: 'MIAMI - 3 Days',
  },
  {
    id: 4,
    src: '/tile-images/paris.jpeg',
    alt: 'Example 3',
    href: '/example3',
    text: 'PARIS - 4 Days',
  },
  {
    id: 5,
    src: '/tile-images/tokyo.jpeg',
    alt: 'Example 3',
    href: '/example3',
    text: 'TOKYO - 6 Days',
  },
  {
    id: 6,
    src: '/tile-images/Toronto.jpg',
    alt: 'Example 3',
    href: '/example3',
    text: 'TORONTO - 3 Days',
  },
  {
    id: 7,
    src: '/tile-images/Hawaii.jpg',
    alt: 'Example 3',
    href: '/example3',
    text: 'HAWAII - 5 Days',
  },
  {
    id: 8,
    src: '/tile-images/London.jpeg',
    alt: 'Example 3',
    href: '/example3',
    text: 'LONDON - 4 Days',
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

