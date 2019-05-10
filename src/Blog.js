import React from 'react';
import './App.css';

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@serverlessguru")
      .then(res => res.json())
      .then(
        (result) => {
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
      return <div>Loading...</div>;
    } else {
      return (
            <div className="row">
              {items.map(item => (
              <div className="col-md-4 col-lg-4 col-xs-6 col-sm-12">
                <h6 className="title">{item.title}</h6>
                <a target="_blank" rel="noopener noreferrer" href={item.link}><img alt={item.title} src={item.thumbnail} className="img-fluid blog"/></a>
                <p className="date text-center">{item.pubDate}</p>
              </div>
              ))}
            </div>
      );
    }
  }
}

export default Blog;
