/* eslint-disable no-undef */
/* eslint class-methods-use-this: ["error", { "exceptMethods": ["moveCarousel", "componentDidMount"] }] */
import React from 'react';
import $ from 'jquery';
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
    this.state = {
      offset: 0,
      max: null,
    };
    this.handleNextClick = this.handleNextClick.bind(this);
    this.handlePrevClick = this.handlePrevClick.bind(this);
    this.toggleButton = this.toggleButton.bind(this);
    this.setMax = this.setMax.bind(this);
  }

  handlePrevClick() {
    if (this.state.offset !== 0) {
      this.setState({ offset: (this.state.offset - 320) }, () => {
        $('.main-carousel').css('transform', `translateX(-${this.state.offset}px)`);
        this.toggleButton();
      });
    }
  }

  handleNextClick() {
    if (this.state.offset !== (this.state.max || 321)) {
      this.setState({ offset: (this.state.offset + 320) }, () => {
        $('.main-carousel').css('transform', `translateX(-${this.state.offset}px)`);
        this.setMax();
        this.toggleButton();
      });
    }
  }

  toggleButton() {
    if (this.state.offset !== 0) {
      $('.main-carousel-button-prev').removeClass('is-hidden');
    }
    if (this.state.offset === 0) {
      $('.main-carousel-button-prev').addClass('is-hidden');
    }
    if (this.state.offset === (this.state.max || 321)) {
      $('.main-carousel-button-next').addClass('is-hidden');
    }
    if (this.state.offset !== (this.state.max || 321)) {
      $('.main-carousel-button-next').removeClass('is-hidden');
    }
  }

  setMax() {
    const oneWidth = $('.card').first()[0].offsetWidth;
    const totalMargin = $('.card').first()[0].offsetLeft * 2;
    const max = (this.props.homes.length - 3) * (oneWidth + totalMargin);
    this.setState({ max });
  }

  render() {
    return (
      <div className="all-wrapper">
        <div className="main-carousel-button-prev is-hidden" onClick={this.handlePrevClick}>
          <FontAwesomeIcon icon={faChevronLeft} />
          </div>
        <div className="main-carousel-wrapper">
          <ul className="main-carousel">
            {this.props.homes.map((home) => (
                <li className="card" key={home.id} id={home.id}>
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
            ))
            }
          </ul>
        </div>
        <div className="main-carousel-button-next" onClick={this.handleNextClick}>
          <FontAwesomeIcon icon={faChevronRight} />
        </div>
      </div>
    );
  }
}

export default MainCarousel;

// componentDidMount() {
    // $('document').ready(() => {
    //   console.log('document is ready');

    //   const mainCarousel = $('.main-carousel');
    //   const leftButton = $('.main-carousel-button-prev');
    //   const rightButton = $('.main-carousel-button-next');

    //   console.log('cards >', $('.card'));
    //   const cards = Array.from(mainCarousel.children()); // array of cards
    //   console.log('cards', cards);

    //   const getCardWidth = () => {
    //     const oneWidth = cards.length > 0 ? cards[0].offsetWidth : 0;
    //     const totalMargin = cards.length > 0 ? cards[0].offsetLeft * 2 : 0;
    //     return oneWidth + totalMargin;
    //   };

    //   const cardWidth = getCardWidth(); // 320

    //   // track which cards should be displayed.
    //   let offset = 0;
    //   const maxX = (cards.length - 3) * cardWidth;


    //   const moveCards = (moveAmount) => {
    //     mainCarousel.style.transform = `translateX(-${moveAmount}px)`;
    //   };

    //   // used to hide arrows when advancing in that direction is not an option.
    //   const toggleArrows = () => {
    //     if (offset === 0) {
    //       leftButton.addClass('is-hidden');
    //     } else if (offset === maxX) {
    //       rightButton.addClass('is-hidden');
    //     } else {
    //       leftButton.removeClass('is-hidden');
    //       rightButton.removeClass('is-hidden');
    //     }
    //   };

    //   rightButton.on('click', () => {
    //     // shift cards
    //     console.log('right button clicked');
    //     if (offset !== maxX) {
    //       offset += cardWidth;
    //       moveCards(offset);
    //     }
    //     toggleArrows();
    //   });

    //   leftButton.on('click', () => {
    //     if (offset !== 0) {
    //       offset -= cardWidth;
    //       moveCards(offset);
    //     }
    //     toggleArrows();
    //   });
    // });
  // }
