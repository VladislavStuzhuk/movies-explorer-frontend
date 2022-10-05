import { useState } from 'react';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio'
import Header from '../Header/Header';
import SideBar from '../SideBar/SideBar';
import Footer from '../Footer/Footer';

function Main(props) {
  const {
    isSideBar,
    sideBarClose,
    sideBarOpen,
  } = props;
  return (
    <>
      <Header
          onClickNavBtn={sideBarOpen}
        />
        
      <main className="App">
        <Promo/>
        <AboutProject/>
        <Techs/>
        <AboutMe/>
        <Portfolio/>
        <SideBar
          isOpen={isSideBar}
          onClose={sideBarClose}
        />
      </main>
      <Footer/>
    </>
 )
}
export default Main;
