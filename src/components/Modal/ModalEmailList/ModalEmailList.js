import ModalTemplate from "../ModalTemplate/ModalTemplate";

function ModalEmailList({ handleCloseModal, isOpen }) {
  return (
    <ModalTemplate
      handleCloseModal={handleCloseModal}
      isButtonPresent={false}
      isOpen={isOpen}
      title={"Added to email list!"}
    >
      <p className="modal-email-list__paragraph">
        Thank you for subscribing to our email list. You will be the first to
        know about new posts!
      </p>
    </ModalTemplate>
  );
}

export default ModalEmailList;
