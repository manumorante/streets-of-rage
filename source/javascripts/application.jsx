import React from 'react';
import ReactDOM from 'react-dom';

const Hello = () => {
  return (
    <div className="class-name-example">Hello World!</div>
  );
};

ReactDOM.render(
  <Hello />,
  document.getElementById('root')
);