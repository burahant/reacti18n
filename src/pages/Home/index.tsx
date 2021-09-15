import "./styles.css";
import { withTranslation, useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="home">
        <h1>
          <p>{t("Find Unique Experiences")}</p>
        </h1>
      </div>
    </>
  );
};

export default withTranslation()(Home);
