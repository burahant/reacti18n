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
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
          sint, in repudiandae soluta eum excepturi, voluptatum quos sed
          obcaecati temporibus expedita ab quaerat officia. Saepe ea officia
          rerum laudantium similique.
        </p>
      </div>
    </>
  );
};

export default withTranslation()(About);
