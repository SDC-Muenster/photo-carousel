import React from 'react';
import '../styles/Carousel.css';
// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import HomeCarousel from './HomeCarousel.jsx';
import HomeDetail from './HomeDetail.jsx';


class MainCarousel extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const mainCarousel = document.querySelector('.main-carousel');
    const leftButton = document.querySelector('.main-carousel-button-prev');
    const rightButton = document.querySelector('.main-carousel-button-next');

    const cards = Array.from(mainCarousel.children); //array of cards
    // console.log(cards.length);

    const getCardWidth = () => {
      let oneWidth = cards.length > 0 ? cards[0].offsetWidth : 0;
      let totalMargin = cards.length > 0 ? cards[0].offsetLeft * 2 : 0;

      return oneWidth + totalMargin;
    }

    const cardWidth = getCardWidth(); //320

    //track which cards should be displayed.
    let offset = 0;
    let maxX = (cards.length - 3) * cardWidth;


    const moveCards = (moveAmount) => {
      mainCarousel.style.transform = 'translateX(-' + moveAmount + 'px)';
    };

    //used to hide arrows when advancing in that direction is not an option.
    const toggleArrows = () => {
      if (offset === 0) {
        leftButton.classList.add('is-hidden');
      } else if (offset === maxX) {
        rightButton.classList.add('is-hidden');
      } else {
        leftButton.classList.remove('is-hidden');
        rightButton.classList.remove('is-hidden');
      }
    }

    rightButton.addEventListener('click', e => {
      //shift cards
      if (offset !== maxX) {
        offset += cardWidth;
        moveCards(offset);
      }
      toggleArrows();
    });

    leftButton.addEventListener('click', e => {
      if (offset !== 0) {
        offset -= cardWidth;
        moveCards(offset);
      }
      toggleArrows();
    });

  }

  render() {
    return (
      <div className="all-wrapper">
        <div className="main-carousel-button-prev is-hidden">
          <FontAwesomeIcon icon={faChevronLeft} />
          </div>
        <div className="main-carousel-wrapper">
          <ul className="main-carousel">
            {this.props.homes.map((home) => {
              return (
                <li className="card" key={home.id}>
                  <HomeCarousel
                    photos={home.photos}
                    key={home.id.toString()}
                    id={home.id}
                  />
                  <HomeDetail
                  id={home.id}
                  title={home.title}
                  location={home.location}
                  cost={home.cost}
                  rating={home.rating}
                  reviews={home.reviews}
                  type={home.type}
                  />
                </li>
              );
            })
            }
          </ul>
        </div>
        <div className="main-carousel-button-next">
          <FontAwesomeIcon icon={faChevronRight} />
        </div>
      </div>
    );
  }
}


export default MainCarousel;
