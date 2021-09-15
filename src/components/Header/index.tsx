import "./styles.css";

import { withTranslation, useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Header = () => {
  const { t } = useTranslation();
  return (
    <>
      <header>
        <div className="topnav ">
          <Link className="active" to="/">
            {t("Home")}
          </Link>
          <Link to="/news">{t("News")}</Link>
          <Link to="/contact">{t("Contact")}</Link>
          <Link to="/about">{t("About")}</Link>
        </div>
      </header>
      {/*/footer*/}
    </>
  );
};

export default withTranslation()(Header);
