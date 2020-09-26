import React from 'react';
import fetch from 'node-fetch'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
    };
  }

  componentDidMount() {
    this.getAGame();
  }

  render() {
    return (
      <main>
        PhotoGallery
      </main>
    );
  }
}

export default App;