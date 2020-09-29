import React from 'react';
import fetch from 'node-fetch'
import PhotoList from './PhotoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataList: [],
      pageBanner: [],
    };
    this.getPhotos =this.getPhotos.bind(this)
  }

  componentDidMount() {
    this.getPhotos();
  }

  getPhotos() {
    fetch('/photos')
    .then((res) => res.json())
    .then((data)=>{
      console.log(data);
      let pageBanner = data.slice(0, 5);
      console.log("pageBanner: ",pageBanner);

      this.setState({
        pageBanner: pageBanner,
      })
    })
  }

  render() {
    return (
      <div>
        <PhotoList photos={this.state.dataList} />
      </div>
    );
  }
}

export default App;