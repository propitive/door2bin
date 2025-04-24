import logo from "../../../images/components/main/door2bin-logo__main-green.png";

import MainStep from "./MainStep/MainStep";

const stepsData = [
  {
    number: 1,
    title: "Trash is Collected",
    description:
      "Doorstep Details collects trash or recycling door to door from each unit using a leak-proof satchel or cart.",
  },
  {
    number: 2,
    title: "Trash is Disposed",
    description:
      "The collected trash is then disposed of properly in community dumpsters or compactors.",
  },
  {
    number: 3,
    title: "Area is Cleaned",
    description:
      "Our team ensures that the surrounding area is kept clean and free of any leftover debris.",
  },
];

function MainSteps() {
  return (
    <>
      <div className="main-steps">
        <div className="main-steps__container">
          <div className="main-steps__top">
            <div className="main-steps__text">
              <h2 className="main-steps__header">
                How Does The Door2Bin System Work?
              </h2>
              <p className="main-steps__paragraph">
                It’s simple! Our proven system starts by delivering a sleek, new
                13-gallon container to each unit in the community. Residents are
                then allowed to place their bagged-trash inside the container,
                and place the container outside their doorstep for trash
                retrieval on the industry-standard schedule of 7p.m. — 9p.m.,
                Monday and Thursday.
              </p>
              <p className="main-steps__paragraph">
                D2B Porters remove the bagged-trash from each unit with our
                “leak-proof” satchels, starting pickup at 7 p.m. D2B-Valet Trash
                Porters, then dispose of the trash in the community’s onsite
                dumpsters or compactor. We also clean the area around the
                dumpsters or compactor and conclude service by sending Property
                Management a Daily “Door2Bin Report” or “D2B Report” for short.
              </p>
            </div>
            <img className="main-steps__image" src={logo} />
          </div>
          <div className="main-steps__bottom">
            {stepsData.map((step) => {
              return <MainStep steps={step} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default MainSteps;
