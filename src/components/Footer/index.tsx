import "./styles.css";

import i18n from "i18next";
import { withTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Footer = () => {
  const handleChange = (language: string) => {
    i18n.changeLanguage(language);
  };
  return (
    <>
      <footer>
        <div className="footer">
          <button className="button" onClick={() => handleChange("en")}>
            EN
          </button>
          <button className="button" onClick={() => handleChange("th")}>
            TH
          </button>
          <Link to="/login" className="button">
            Go to Sign in
          </Link>
          <a href="/" className="button">
            Back to Home
          </a>
        </div>
      </footer>
      {/*/footer*/}
    </>
  );
};

export default withTranslation()(Footer);
