import React, { DOM } from 'react';

const TextBox = (props) => (
  DOM.span({ style: { border: '2px solid red' } }, props.post)
);

export default TextBox;
