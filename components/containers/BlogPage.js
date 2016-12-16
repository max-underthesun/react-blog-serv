import React from 'react';

import BlogList from '../ui/BlogList';

const items = [
  {
    image: { src: "https://js.cx/gallery/img1-lg.jpg", width: "250px", height: "200px" },
    text: { post: "Here is the string for a TextBox" }
  },
  { 
    image: { src: "https://js.cx/gallery/img2-lg.jpg", width: "250px", height: "200px" },
    text: { post: "Second string for a TextBox" }
  },
  { 
    image: { src: "https://js.cx/gallery/img3-lg.jpg", width: "250px", height: "200px" },
    text: { post: "And the third string..." }
  }
];

class BlogPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items };
  }

  render() {
    const { items } = this.state;
    return React.createElement(BlogList, { items });
  }
}

export default BlogPage;
