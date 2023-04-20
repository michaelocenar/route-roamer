// import React, { useState, useEffect } from "react";
// import dynamic from "next/dynamic";
// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';

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



//   return (
//     <div className="carousel-container">
//       <div className="row no-gutters">
//         <div
//           className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mt-3 pb-2 bg-white"
//           id="owl-carousel-destinations"
//         >
//           <h3 className="text-center">
//             <span className="heading float-left w-100">My Favourites</span>
//           </h3>
//           <ul id="owl-carousel-ul" className="owl-carousel owl-loaded owl-drag">
//             <OwlCarousel
//               className="owl-theme"
//               loop
//               margin={4}
//               nav={true}
//               navText={[
//                 '<img src="/images/Arrow_left.png" />',
//                 '<img src="/images/Arrow_right.png" />',
//               ]}
//               dots={false}
//               animateIn={true}
//               {...options}
//             >
//               {tiles && tiles.length > 0
//                 ? tiles.map((destination) => {
//                   return (
//                     <div
//                       id="featuredDestination"
//                       className="item float-left w-100"
//                       key={destination.name}
//                     >
//                       <div className="destinationListing col-lg-5th col-md-4 col-sm-6 col-xs-12">
//                         <a href={destination.url}>
//                           <a className="destination float-left">
//                             <span className="image text-center">
//                               {/* <img src={destination.image} alt={destination.name}
//                               /> */}
//                               <img
//                                 id={"img" + destination.id}
//                                 src={destination.image}
//                                 alt={destination.name}
//                               />
//                             </span>
//                           </a>
//                         </a>
//                       </div>
//                     </div>
//                   );
//                 })
//                 : ""}
//             </OwlCarousel>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Slider;