import "./styles.css";
import { withTranslation, useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="contact">
        <h1>
          <p>{t("Contact with Us")}</p>
        </h1>
      </div>
    </>
  );
};

export default withTranslation()(Contact);
