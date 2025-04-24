function BookOnlineButton({
  className,
  buttonText,
  isArrowVisible,
  handleOpenModal,
  toggleSidebar,
}) {
  const handleClick = () => {
    toggleSidebar();
    handleOpenModal();
  };

  return (
    <button
      className={"book-online-button " + className}
      type="submit"
      onClick={handleClick}
    >
      {buttonText}
      {isArrowVisible ? (
        <svg
          fill="currentColor"
          viewBox="0 0 24 24"
          className="book-online-button__icon"
        >
          <path
            clipRule="evenodd"
            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
            fillRule="evenodd"
          ></path>
        </svg>
      ) : null}

      {/* <span className="book-online__button-shadow"></span>
      <span className="book-online__button-edge"></span>
      <span className="book-online__button-text">{buttonText}</span> */}
    </button>
  );
}

export default BookOnlineButton;
