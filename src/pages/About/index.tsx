import "./styles.css";
import { withTranslation, useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="about">
        <h1>
          <p>{t("Our Origins and Story")}</p>
        </h1>
      </div>
    </>
  );
};

export default withTranslation()(About);
