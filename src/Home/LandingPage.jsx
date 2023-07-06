import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="landing-page__content">
        <img className="landing-page__logo" src='https://download.logo.wine/logo/React_(web_framework)/React_(web_framework)-Logo.wine.png' alt="React logo" />
        <h1 className="landing-page__title">Welcome!</h1>
        <p className="landing-page__text">Click on the Projects in the navbar to get started.</p>
      </div>
      <img
        className="landing-page__image"
        src="https://cdn.dribbble.com/users/79571/screenshots/9869396/media/365242fbd1d874de1d0c75fecfc8cb75.png?compress=1&resize=400x300&vertical=center"
        alt="Landing page"
      />
    </div>
  );
};

export default LandingPage;
