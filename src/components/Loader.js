import React from 'react';

const Loader = () => {
  return (
    <div className='ui segment' style={{ height: '100vh' }}>
      <div className='ui active dimmer'>
        <div className='ui big text loader'>Loading...Please Wait</div>
      </div>
      <p></p>
      <p></p>
      <p></p>
    </div>
  );
};

export default Loader;
