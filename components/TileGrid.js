import Tile from './Tile';
import styles from './Tile.module.css';

const tilesData = [
  {
    id: 1,
    src: '/example1.jpg',
    alt: 'Example 1',
    href: '/example1',
    text: 'Example 1 overlay text',
  },
  {
    id: 2,
    src: '/example2.jpg',
    alt: 'Example 2',
    href: '/example2',
    text: 'Example 2 overlay text',
  },
  {
    id: 3,
    src: '/example3.jpg',
    alt: 'Example 3',
    href: '/example3',
    text: 'Example 3 overlay text',
  },
  {
    id: 4,
    src: '/example3.jpg',
    alt: 'Example 3',
    href: '/example3',
    text: 'Example 3 overlay text',
  },
  {
    id: 5,
    src: '/example3.jpg',
    alt: 'Example 3',
    href: '/example3',
    text: 'Example 3 overlay text',
  },
  {
    id: 6,
    src: '/example3.jpg',
    alt: 'Example 3',
    href: '/example3',
    text: 'Example 3 overlay text',
  },
  {
    id: 7,
    src: '/example3.jpg',
    alt: 'Example 3',
    href: '/example3',
    text: 'Example 3 overlay text',
  },
  {
    id: 8,
    src: '/example3.jpg',
    alt: 'Example 3',
    href: '/example3',
    text: 'Example 3 overlay text',
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

