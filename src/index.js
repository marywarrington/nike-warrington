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
    };
    this.updateSearchParam = this.updateSearchParam.bind(this);
    this.getPhotos = this.getPhotos.bind(this);
  }

  /**
   * Updates search param to pull in relevant images.
   * @param {string} newParam - The new search query.
   */
  updateSearchParam(newParam) {
    // this.setState({ searchParam: newParam});
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
    /* NOTE: API key should not be handled like this, however, given the timeline and scope of this project (and the fact that I chose an API that required a key), I'm choosing to leave it here. I fully acknowledge this is not how I would do this normally. */
    fetch(`https://api.unsplash.com/photos/random?count=10&query=${this.state.searchParam}&client_id=5rFSbHQe9VqXHk9zAYEpj_vZLe0IEVA7Ny22ShkaOJQ`, {method:'get'})
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            images: result
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
    const { error, images, searchParam } = this.state;

    return(
      <>
        <h1>Nike Image API App</h1>
        <QueryInput onSubmit={this.updateSearchParam} searchParam={searchParam}/>
        {images.length > 0 && !error ?
          (
          <>
            <h2 className='current-search'>Image results for search term "{searchParam}":</h2>
            <SlideShow images={images}/>
          </>
          ) :
          <h2>Sorry, we can't find any images. Try another search term!</h2>
        }
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));