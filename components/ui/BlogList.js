import React, { DOM } from 'react';
import _ from 'lodash';

import BlogItem from './BlogItem';

const BlogList = ({ items }) => (
  DOM.div(
    null,
    _.map(
      items,
      (item, key) =>(
        React.createElement(BlogItem, Object.assign({ key }, item))
      )
    )
  )
);

export default BlogList;
