/* eslint-disable no-console */
/* eslint-disable no-undef */
import React from 'react';
import axios from 'axios';
import MainCarousel from './components/MainCarousel.jsx';
import './styles/style.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      homes: [],
    };
  }

  componentDidMount() {
    this.fetchHomes();
  }

  fetchHomes() {
    const homeId = new URL(window.location.href).searchParams.get('id') || 12345;
    axios.get('/homes', {
      params: {
        id: homeId,
      },
    })
      .then((response) => {
        console.log('response is:', response.data); // to be removed
        if (Array.isArray(response.data)) {
          this.setState({ homes: response.data });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="main-wrapper">
        <div className="module-title">
        <div >More homes you may like</div>
        </div>
        {/* Carousel Component */}
        <MainCarousel homes={this.state.homes} />
      </div>
    );
  }
}

export default App;
