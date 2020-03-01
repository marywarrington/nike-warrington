import React from 'react';
import ReactDOM from 'react-dom';
import { SlideShow } from "./components/slideshow";
import { QueryInput } from "./components/query-input";
import '@brainhubeu/react-carousel/lib/style.css';
import './scss/main.scss';

export class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      images: [],
      searchParam: 'nike',
      loading: true,
    };
    this.updateSearchParam = this.updateSearchParam.bind(this);
    this.getPhotos = this.getPhotos.bind(this);
  }

  /**
   * Updates search param to pull in relevant images.
   * @param {string} newParam - The new search query.
   */
  updateSearchParam(newParam) {
    this.setState({ searchParam: newParam}, this.getPhotos);
  }

  /**
   * Updates images on any subsequent render
   */
  componentDidMount() {
    this.getPhotos();
  }

  /**
   * Calls to the Unsplash API to retrieve all image data.
   * Uses current search param in state, as well as API key from env
   */
  getPhotos() {
    fetch(`https://api.unsplash.com/photos/random?count=10&query=${this.state.searchParam}&client_id=${process.env.UNSPLASH_KEY}`, {method:'get'})
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          images: result,
          loading: false
        });
      },
      (error) => {
        this.setState({
          error
        });
      }
    )
  }

  render(){
    const { error, images, searchParam, loading } = this.state;

    return(
      <>
        <h1>Nike Image API App</h1>
        <p>Enter your search term below, and press "submit" to see new images! If no term is provided, random images will be selected.</p>
        <QueryInput onSubmit={this.updateSearchParam} searchParam={searchParam}/>
        {images.length > 0 && !error ?
          (
          <>
            <h2 className='current-search'>Image results for search term "{searchParam}":</h2>
            <SlideShow images={images}/>
          </>
          ) : loading ?
          <p>One second please...</p> :
          <h2>Sorry, we can't find any images. Try another search term!</h2>
        }
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));