import React, { useEffect, useState } from 'react';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';

function Home({ msg }) {
  return <div>home msg: {msg}</div>;
}

const App = ({ props }) => {

  useEffect(async () => {
    const app = await window.Garfish.loadApp('app2', {
      entry: 'http://localhost:3003',
      basename: '/',
      domGetter: '#subApp1',
      sandbox: {
        fixBaseUrl: true,
      },
      props: {
        msg: 'hello world',
      },
    });
    app.mounted ? app.show : await app.mount();
  })

  const [show, setShow] = useState(true);

  const onClickButton = () => {
    setShow(e => !!!e)
  }

  return (
    <BrowserRouter>
      <div
        style={{
          margin: '10px',
          padding: '10px',
          textAlign: 'center',
          backgroundColor: 'cyan',
        }}
      >
        <h1>Sub App</h1>
        <button onClick={onClickButton}>切换节点</button>
        <nav
          style={{
            borderBottom: 'solid 1px',
            paddingBottom: '1rem',
          }}
        >
          <Link to="/">Home</Link> | <Link to="/invoices">Invoices</Link> |{' '}
          <Link to="/expenses">Expenses</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home msg={props.msg} />} />
          <Route path="expenses" element={<Expenses />} />
          <Route path="invoices" element={<Invoices />} />
        </Routes>
        {show ? <div id={"subApp1"} /> : null}
      </div>
    </BrowserRouter>
  );
};

function Expenses() {
  return (
    <main style={{ padding: '1rem 0' }}>
      <h2>Expenses</h2>
    </main>
  );
}

function Invoices() {
  return (
    <main style={{ padding: '1rem 0' }}>
      <h2>Invoices</h2>
    </main>
  );
}

export default App;
