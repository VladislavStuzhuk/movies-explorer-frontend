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
    <main className="App">
      <Header
        onClickNavBtn={sideBarOpen}
      />
      <Promo/>
      <AboutProject/>
      <Techs/>
      <AboutMe/>
      <Portfolio/>
      <Footer/>
      <SideBar
        isOpen={isSideBar}
        onClose={sideBarClose}
      />
    </main>
 )
}
export default Main;
