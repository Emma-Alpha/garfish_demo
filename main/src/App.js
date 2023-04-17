import React, { useEffect, Suspense, useState } from 'react';
import Garfish from 'garfish';

const App = () => {
  const [show, setShow] = useState(true);
  useEffect(async () => {
    const app = await Garfish.loadApp('app2', {
      entry: 'http://localhost:3002',
      basename: '/',
      domGetter: '#container',
      sandbox: {
        fixBaseUrl: true,
      },
      props: {
        msg: 'hello world',
      },
    });
    await app.mount();
  });

  const handleClick = () => {
    setShow(e => !!!e)
  }

  return (
    <div
      style={{
        margin: '10px',
        padding: '10px',
        textAlign: 'center',
        backgroundColor: 'greenyellow',
      }}
    >
      <button onClick={handleClick}>切换装填</button>
      <h1>Main App</h1>
      {show ? <div id="container"></div> : null}
    </div>
  );
};

export default App;
