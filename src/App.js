import React from 'react';
import './index.css';

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Body from "./body/Body";

function App() {
  return (
    <>
      <div className="wrapper">
        <Header/>
        {/* <Main/>       */}
        <Body/>
        <Footer/>
      </div>
    </>
  );
}
export default App;
