import React from 'react';

class Blog extends React.Component {
  //Only place you can directly write to this.state in the constructor method
  constructor() {
    super();
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  //componentDidMount allows for adding objects to the array
  componentDidMount() {
    //fetch asynchronously load contents of the url
    fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@serverlessguru")
    // res.json will just return the body as promise with json content
      .then(res => res.json())
      .then(
         // call this function when the above chained Promise resolves
        (result) => {
          // this.setState function, which will accept an Object that will be eventually merged into Components current state.
          this.setState({
            isLoaded: true,
            items: result.items.slice(0,9)
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
    }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>
    } else {
      return (
            <div className="row">
            {items.map(item => (
            <div key={item.pubDate} className="col-md-4 col-lg-4 col-xs-6 col-sm-12">
              <h6 className="blog-title">{item.title}</h6>
              <a target="_blank" rel="noopener noreferrer" href={item.link}><img alt={item.title} src={item.thumbnail} className="img-fluid blog"/></a>
              <p className="pub-date text-center">{item.pubDate}</p>
            </div>
              ))}
            </div>
      );
    }
  }
}

export default Blog;
