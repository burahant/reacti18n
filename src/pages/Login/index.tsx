
import "./styles.css";
import { withTranslation, useTranslation } from "react-i18next";

const Login = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="container">
        <form action="/" method="get">
          <div className="row">
            <h2 style={{ textAlign: "center" }}>
              {t("Please Login")}
            </h2>
            <div className="vl">
              <span className="vl-innertext">or</span>
            </div>
            <div className="col">
              <a href="/" className="fb btn">
                <i className="fa fa-facebook fa-fw" />
                {t("Login with Facebook")}
              </a>
              <a href="/" className="twitter btn">
                <i className="fa fa-twitter fa-fw" /> {t("Login with Twitter")}
              </a>
              <a href="/" className="google btn">
                <i className="fa fa-google fa-fw"></i> {t("Login with Google+")}
              </a>
            </div>
            <div className="col">
              <div className="hide-md-lg">
                <p>{t("Or sign in manually:")}</p>
              </div>
              <input
                type="text"
                name="username"
                placeholder={t("Username")}
                // required
              />
              <input
                type="password"
                name="password"
                placeholder={t("Password")}
                // required
              />
              <input type="submit" value="Sign in"/>
            </div>
          </div>
        </form>
      </div>
      {/* <div className="bottom-container">
        <div className="row">
          <div className="col">
            <a href="#" style={{ color: "white" }} className="btn">
              Sign up
            </a>
          </div>
          <div className="col">
            <a href="#" style={{ color: "white" }} className="btn">
              Forgot password?
            </a>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default withTranslation()(Login);
