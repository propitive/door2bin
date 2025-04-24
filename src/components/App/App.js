import { useState } from "react";
import { Route, Switch } from "react-router-dom";

import About from "../About/About";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";
import ModalEmailList from "../Modal/ModalEmailList/ModalEmailList";
import ScrollToTop from "../ScrollToTop/ScrollToTop";

console.log(Footer);
console.log(Header);
console.log(Main);
console.log(ScrollToTop);

function App() {
  const [modals, setModals] = useState({
    emailList: false,
  });

  const toggleModal = (modalType, isOpen) => {
    setModals((prevState) => ({ ...prevState, [modalType]: isOpen }));
  };

  return (
    <>
      <ScrollToTop />
      <Header />
      <Switch>
        <Route path="/about-us">
          <About />
        </Route>
        <Route path="/">
          <Main />
        </Route>
      </Switch>
      <Footer handleEmailListModalOpen={() => toggleModal("emailList", true)} />

      {/* {modals.emailList && (
        <ModalEmailList
          handleCloseModal={() => toggleModal("emailList", false)}
          isOpen={modals.emailList}
        />
      )} */}
    </>
  );
}

export default App;
