export const Services = () => {
  return (
    <>
      {/* Header */}
      <div className="card__header">
        <h1 className="card__header--title">Service</h1>
      </div>
      {/* Header Ends Here*/}
      
      {/* Header product service */}
      <section className="card card-service">
        <div className="card__container--demo card-service__container">
          <div className="card__wrapper--demo card-service__wrapper">
            <img
              className="card-service__img"
              src="/assets/image/HomePage-Images/Best-Quality.png"
              alt="Best-Quality"
            />
            <h1 className="card__title--demo card-service__title">
              Best Quality
            </h1>
          </div>
          <div className="card__wrapper--demo card-service__wrapper">
            <img
              className="card-service__img"
              src="/assets/image/HomePage-Images/Best-Offer.png"
              alt="Best-Offer"
            />
            <h1 className="card__title--demo card-service__title">
              Best Offer
            </h1>
          </div>
          <div className="card__wrapper--demo card-service__wrapper">
            <img
              className="card-service__img"
              src="/assets/image/HomePage-Images/Secure.png"
              alt="Secure"
            />
            <h1 className="card__title--demo card-service__title">Secure</h1>
          </div>
          <div className="card__wrapper--demo card-service__wrapper">
            <img
              className="card-service__img"
              src="/assets/image/HomePage-Images/Free-Shipping.png"
              alt="Free-Shipping"
            />
            <h1 className="card__title--demo card-service__title">
              Free Shipping
            </h1>
          </div>
        </div>
      </section>
      {/* Header product Service Ends Here*/}
    </>
  );
};
