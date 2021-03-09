import React from 'react';

const text = {
  nl2br(text: string) {
    return text.split('\n').map((item, key) => {
      return (<span key={key}>{item}<br/></span>);
    });
  },
};

export default text;
