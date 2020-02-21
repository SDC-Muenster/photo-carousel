import React from 'react';
import axios from 'axios';
import MainCarousel from './components/MainCarousel.jsx'
import './styles/style.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      homes: null
    };

  }



  componentDidMount(){
    const homeId = new URL(window.location.href).searchParams.get('id') || 12345; //changed house_id to id & added a default value
    console.log(homeId);
    axios.get('/homes', {
      params: {
        'id': homeId
      }
    })
    .then((response) => {
      console.log('response is', response.data); // to be removed
      this.setState({ homes: response.data}); //changed response.data[0].homes to response.data
    })
    .catch((error) => {
      console.log(error);
    });

  }

  render() {
    const { homes } = this.state;

    if (homes === null) {
      return null;
    }
    return(
      <div className="main-wrapper">
        <div className="module-title">
        <div >More homes you may like</div>
        </div>
        {/* Carousel Component */}
        <MainCarousel homes={this.state.homes} />
      </div>
    )
  };
};

export default App;
