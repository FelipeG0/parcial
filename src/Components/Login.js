import React from 'react';

import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

function Login() {
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
              <h2>Login with media to get in quick</h2>
              <a href="https://facebook.com/" className="social-button facebook">Sign in with Facebook</a>
              <a href="https://x.com/" className="social-button twitter">Sign in with Twitter</a>
              <a href="https://accounts.google.com/" className="social-button google">Sign in with Google</a>
            </div>
            <div className="form-login">
              <form onSubmit={onSubmit}>
                <h2>Login to your account</h2>
                <div className="signup-container">
                    <p>Don't have an account?</p>
                    <button className="sign-up">Sign up free</button>
                </div>
            

                
                <label>Email address</label>
                <input
                  type="email"
                  name="email"
                  {...register("email", {
                    required: "Correo es requerido",
                    pattern: {
                      value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                      message: "Correo no válido",
                    },
                  })}
                />
                {errors.email && <span className="error">{errors.email.message}</span>}
    
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  {...register("password", {
                    required: "Contraseña requerida",
                    minLength: {
                      value: 8,
                      message: "La contraseña debe tener al menos 8 caracteres",
                    },
                    validate: {
                      hasUppercase: (value) =>
                        /[A-Z]/.test(value) || "La contraseña debe tener al menos una mayuscula",
                      hasLowercase: (value) =>
                        /[a-z]/.test(value) || "La contraseña debe tener al menos una minuscula",
                      hasNumber: (value) =>
                        /\d/.test(value) || "La contraseña debe tener al menos un numero",
                      hasSymbol: (value) =>
                        /[!@#$%^&*(),.?":{}|<>]/.test(value) || "La contraseña debe tener al menos un simbolo",
                    },
                  })}
                />
                {errors.password && <span className="error">{errors.password.message}</span>}
    
                <div className="login-button">
              <div className="remember-me">
                <input type="checkbox" id="rememberMe" />
                <label htmlFor="rememberMe">Remember me</label>
              </div>
              <button className="forgot-password">Forgot password?</button>
            </div>

            <button type="submit" className="submit-button">Login with email</button>
              </form>
            </div>
          </div>
        </div>
      );

}
export default Login;

  