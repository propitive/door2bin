import { useState } from "react";
import { Route, Switch } from "react-router-dom";

import About from "../About/About";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import ModalContactForm from "../Modal/ModalContactForm/ModalContactForm";
import ModalGetAQuote from "../Modal/ModalGetAQuote/ModalGetAQuote";
import ModalEmailList from "../Modal/ModalEmailList/ModalEmailList";

console.log(Footer);
console.log(Header);
console.log(Main);
console.log(ScrollToTop);

function App() {
  const [modals, setModals] = useState({
    emailList: false,
    contactForm: false,
    quote: true,
  });

  const toggleModal = (modalType, isOpen) => {
    setModals((prevState) => ({ ...prevState, [modalType]: isOpen }));
  };

  return (
    <>
      <ScrollToTop />
      <Header handleOpenModal={() => toggleModal("quote", true)} />
      <Switch>
        <Route path="/about-us">
          <About />
        </Route>
        <Route path="/">
          <Main />
        </Route>
      </Switch>
      <Footer handleEmailListModalOpen={() => toggleModal("emailList", true)} />

      {modals.emailList && (
        <ModalEmailList
          handleCloseModal={() => toggleModal("emailList", false)}
          isOpen={modals.emailList}
        />
      )}

      {modals.quote && (
        <ModalGetAQuote
          handleCloseModal={() => toggleModal("quote", false)}
          handleOpenSubmit={() => toggleModal("contactForm", true)}
          isOpen={modals.quote}
        />
      )}

      {modals.contactForm && (
        <ModalContactForm
          handleCloseModal={() => toggleModal("contactForm", false)}
          isOpen={modals.contactForm}
        />
      )}
    </>
  );
}

export default App;
