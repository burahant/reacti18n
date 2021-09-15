import "./styles.css";
import { withTranslation, useTranslation } from "react-i18next";

const News = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="news">
        <h1>
          <p>{t("News and Events")}</p>
        </h1>
      </div>
    </>
  );
};

export default withTranslation()(News);
