import React from 'react';
import fetch from 'node-fetch'
import PhotoList from './PhotoList.jsx';
import Header from './Header.jsx';
import Body from './Body.jsx';
import classes from '../style/App.module.css';
import Modal from './modal/Modal.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      pageBanner: [],
      imageList: [],
      currentImage: null,
      showModal: false,
    };

    this.getPhotos = this.getPhotos.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.incrementModalImage = this.incrementModalImage.bind(this);
    this.decrementModalImage = this.decrementModalImage.bind(this);
  }

  componentDidMount() {
    this.getPhotos();
  }

  getPhotos() {
    fetch('/photos/1')
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          data: data[0],
          pageBanner: data[0].imageList.slice(0,4),
          currentImage: data[0].imageList[0],
          imageList: data[0].imageList,
        });
      });
  }

  incrementModalImage() {
    this.setState((state) => {
      const temp = state.imageList.slice();
      let currentImageIndex = temp.indexOf(this.state.currentImage);
      if (currentImageIndex === temp.length - 1) {
        currentImageIndex = 0;
      } else {
        currentImageIndex += 1;
      }

      return {
        currentImage: temp[currentImageIndex],
      };
    }
    );
  }

  decrementModalImage() {
    this.setState((state) => {
      const temp = state.imageList.slice();
      let currentImageIndex = temp.indexOf(this.state.currentImage);
      if (currentImageIndex === 0) {
        currentImageIndex = temp.length - 1;
      } else {
        currentImageIndex -= 1;
      }

      return {
        currentImage: temp[currentImageIndex],
      };
    });
  }

  toggleModal() {
    this.setState((state) => {
      const temp = state.showModal;
      return {
        showModal: !temp,
      };
    });
  }

  render() {
    const { pageBanner, data, currentImage, showModal } = this.state;
    return (
      <div>
        <div>
          <Header />
          <PhotoList photos={pageBanner} />
          <button type="button" onClick={this.toggleModal}>Show Modal</button>
          <Body />
        </div>
        {
          showModal
            ? (
              <Modal
                data={data}
                next={this.incrementModalImage}
                prev={this.decrementModalImage}
                className={classes.modal}
                currentImage={currentImage}
              />
            )
            : ''
        }
      </div>
    );
  }
}

export default App;