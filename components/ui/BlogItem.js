import React, { DOM } from 'react';

import Image from './Image';
import TextBox from './TextBox';

const BlogItem = (props) => (
  DOM.div(
    { style: { border: '3px solid green' } },
    React.createElement(Image, props.image),
    React.createElement(TextBox, props.text)
  )
);

export default BlogItem;
