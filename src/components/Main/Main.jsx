
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Main(props) {
  const {
    loggedIn,
  } = props;
  return (
    <>
      <Header
          loggedIn={loggedIn}
        />
        
      <main className="App">
        <Promo/>
        <AboutProject/>
        <Techs/>
        <AboutMe/>
        <Portfolio/>
      </main>
      <Footer/>
    </>
 )
}
export default Main;
