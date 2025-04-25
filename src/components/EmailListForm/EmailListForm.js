import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import BookOnlineButton from "../BookOnlineButton/BookOnlineButton";

function EmailListForm({
  className,
  classNameHeader,
  classNameForm,
  handleEmailListModalOpen,
}) {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hba1kuy",
        "template_z4snumq",
        form.current,
        "jGNwN29o5MpAtqpNz"
      )
      .then(
        (result) => {
          console.log(result.text);
          handleEmailListModalOpen();
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className={"email-list " + className}>
      <h3 className={"email-list__header " + classNameHeader}>
        JOIN OUR MAILING LIST
      </h3>
      <form
        className={"email-list__form " + classNameForm}
        ref={form}
        onSubmit={sendEmail}
      >
        <input
          className="email-list__input"
          name="user-email"
          type="email"
          placeholder="What's your email?"
          required
        />
        <BookOnlineButton
          buttonText="SUBSCRIBE"
          className="email-list__button"
          handleOpenModal={() => null}
          isArrowVisible={false}
          toggleSidebar={() => null}
        />
      </form>
    </div>
  );
}

export default EmailListForm;
