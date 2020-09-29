import React from 'react';
import fetch from 'node-fetch'
import PhotoList from './PhotoList.jsx';
import Header from './Header.jsx';
import Body from './Body.jsx';
import classes from '../style/App.module.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
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
        data: data[0],
        pageBanner: data[0].imageList.slice(0,4),
      })
    })
  }

  render() {
    console.log('pageBanner on App: ', this.state.pageBanner);
    return (
      <div>
        <Header />
        <PhotoList photos={this.state.pageBanner} />
        <Body />
      </div>
    );
  }
}

export default App;