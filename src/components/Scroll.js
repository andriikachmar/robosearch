import React from 'react';

const Scroll = (props) => {
  return (
    <div style={{ overflowY: 'scroll', border: '2px solid black', borderRadius: '5px', height: '755px', paddingTop: '10px'}}>
      {props.children}
    </div>
  );
};

export default Scroll;