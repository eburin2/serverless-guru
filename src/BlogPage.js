// Third Party
import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';


class BlogPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.location)
    return (
      <main id="main">
        <section id="contact" className="section-bg wow fadeInUp">
          <div className="container">
            <div className="section-header">
              <div className="blog-content" dangerouslySetInnerHTML={{__html: this.props.location.state ? this.props.location.state.item.content : "<h3>nope</h3>"}}></div>
            </div>
          </div>
        </section>
      </main>
    );
  }
}

export default BlogPage;
