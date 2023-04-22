import { useState } from "react";
import { items } from "../public/Items.json";
import { Carousel } from "react-bootstrap";


import "bootstrap/dist/css/bootstrap.min.css";
import styles from "/components/Carousel.module.css";

export default function BootstrapCarousel() {
  const { bootstrap } = items;
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div className={styles.carouselContainer}>
        <div className={styles.favTitle}><h3>FAVOURITES</h3></div>
      <Carousel activeIndex={index} onSelect={handleSelect} >
        {bootstrap.map((item) => (
          <Carousel.Item key={item.id} className={styles.itemP} autoplay={false} interval={8000}>
            <img src={item.imageUrl} alt="slides" />
            <Carousel.Caption className={styles.caption}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

