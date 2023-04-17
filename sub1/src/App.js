import React, {useState} from 'react';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';

function Home({ msg }) {
  return <div>home msg: {msg}</div>;
}

const App = ({ props }) => {
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
        <h1>Sub App11111111</h1>
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
