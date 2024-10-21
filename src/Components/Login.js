import React from 'react';

import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

function Login() {
    const {t} = useTranslation();
    const navigate = useNavigate();
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({
      defaultValues: {
        email: "",
        password: "",
      },
    });

    const onSubmit = handleSubmit((data) => {
        console.log("Datos del formulario:", data);
        navigate("/home");
      });

      return (
        <div className="login-container">
          <div className="login-box">
            <div className="social-login">
              <h2>{t('login.loginMedia')}</h2>
              <a href="https://facebook.com/" className="social-button facebook">{t("login.signFacebook")}</a>
              <a href="https://x.com/" className="social-button twitter">{t("login.signTwiter")}</a>
              <a href="https://accounts.google.com/" className="social-button google">{t("login.signGoogle")}</a>
            </div>
            <div className="form-login">
              <form onSubmit={onSubmit}>
                <h2>{t("login.welcome")}</h2>
                <div className="signup-container">
                    <p>{t("login.signUp")}</p>
                    <button className="sign-up">{t("login.signFree")}</button>
                </div>
            

                
                <label>{t("login.email")}</label>
                <input
                  type="email"
                  name="email"
                  {...register("email", {
                    required: t("login.emailReq"),
                    pattern: {
                      value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                      message: t("login.errorEmail"),
                    },
                  })}
                />
                {errors.email && <span className="error">{errors.email.message}</span>}
    
                <label>{t("login.password")}</label>
                <input
                  type="password"
                  name="password"
                  {...register("password", {
                    required:t("login.passwordReq"),
                    minLength: {
                      value: 8,
                      message: t("login.errorPassword"),
                    },
                    validate: {
                      hasUppercase: (value) =>
                        /[A-Z]/.test(value) || t("login.passwordValidate1"),
                      hasLowercase: (value) =>
                        /[a-z]/.test(value) || t("login.passwordValidate2"),
                      hasNumber: (value) =>
                        /\d/.test(value) || t("login.passwordValidate3"),
                      hasSymbol: (value) =>
                        /[!@#$%^&*(),.?":{}|<>]/.test(value) || t("login.passwordValidate4"),
                    },
                  })}
                />
                {errors.password && <span className="error">{errors.password.message}</span>}
    
                <div className="login-button">
              <div className="remember-me">
                <input type="checkbox" id="rememberMe" />
                <label htmlFor="rememberMe">{t("login.rememberMe")}</label>
              </div>
              <button className="forgot-password">{t("login.forgotPassword")}</button>
            </div>

            <button type="submit" className="submit-button">{t("login.loginButton")}</button>
              </form>
            </div>
          </div>
        </div>
      );

}
export default Login;

  