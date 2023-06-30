import React from 'react';
import styles from './index.css';

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
// import Body from "./body/Body";


function App() {
  return (
    <>
      <div className={styles.wrapper}>
        <Header/>
        <Main/>
        <Footer className={styles.footermain}/>
      </div>
    </>
  );
}
export default App;
