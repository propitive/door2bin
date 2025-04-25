import ModalTemplate from "../ModalTemplate/ModalTemplate";

function ModalContactForm({ handleCloseModal, isOpen }) {
  return (
    <ModalTemplate
      isOpen={isOpen}
      handleCloseModal={handleCloseModal}
      title={"Thank you so much!"}
      buttonText={"About Us"}
      link={"/about"}
    >
      <p className="modal-submit__paragraph">
        Thank you for reaching out to us, we will reach back out to you as soon
        as possible! In the meantime, feel free to keep exploring our website.
      </p>
    </ModalTemplate>
  );
}

export default ModalContactForm;
