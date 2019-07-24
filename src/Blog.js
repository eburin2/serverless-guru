import React from 'react';
import { Link } from 'react-router-dom';

class Blog extends React.Component {
  //Only place you can directly write to this.state in the constructor method
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }


  //componentDidMount allows for adding objects to the array
  componentDidMount() {
    //fetch asynchronously load contents of the url
    fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/serverlessguru")
    // res.json will just return the body as promise with json content
      .then(res => res.json())
      .then(
         // call this function when the above chained Promise resolves
        (result) => {
          // this.setState function, which will accept an Object that will be eventually merged into Components current state.
          console.log(result);
          this.setState({
            isLoaded: true,
            items: result.items.slice(0, 9)
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
    const { error, items } = this.state;
       console.log(this.state.items)
       if (error) {
         return <div>Error: {error.message}</div>;
       } else {
         return (
            <section>
              <div className="container">
                <div>
                  <h2 className="blog-title">Blog</h2>
                  <p className="text-center">Exploring the unknown and helping elevate the entire community through written word.</p>
                </div>
                <div className="row">
                  {items.map((item) => {
                    return (
                      <div key={item.guid.slice(21, 37)} className="col-md-4 col-sm-12">
                        <Link to={{
                          pathname: `blog/${item.link.slice(34, 150)}`,
                          state: {
                             item: item
                          }}}>
                          <img alt={item.title} src={item.thumbnail} className="img-fluid blog-img"/>
                        </Link>
                        <h6 className="blog-title">{item.title}</h6>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
          );
        }
      }
    }

   export default Blog;
