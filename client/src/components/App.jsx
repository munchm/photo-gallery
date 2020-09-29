import React from 'react';
import fetch from 'node-fetch'
import PhotoList from './PhotoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageBanner: []
    };
    this.getPhotos =this.getPhotos.bind(this)
  }

  componentDidMount() {
    this.getPhotos();
  }

  getPhotos() {
    fetch('/photos/1')
    .then((res) => res.json())
    .then((data)=>{
      console.log("data: ", data);

      this.setState({
        pageBanner: data[0].imageList,
      })
    })
  }

  render() {
    console.log('pageBanner on App: ', this.state.pageBanner);
    return (
      <div>
        <PhotoList photos={this.state.pageBanner} />
      </div>
    );
  }
}

export default App;