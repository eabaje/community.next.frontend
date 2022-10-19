import Head from "next/head";
import Image from "next/image";
import AuthLayout from "../layout/authLayout";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <AuthLayout>
      <div className="col-lg-6 col-md-12">
        <div className="login-form">
          <h2>Login</h2>

          <form>
            <div className="form-group">
              <label>Username or email</label>
              <input type="text" className="form-control" />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input type="password" className="form-control" />
            </div>

            <div className="remember-me-wrap d-flex justify-content-between align-items-center">
              <p>
                <input type="checkbox" id="test1" />
                <label htmlFor="test1">Remember me</label>
              </p>

              <div className="lost-your-password-wrap">
                <a href="forgot-password.html" className="lost-your-password">
                  Forgot password ?
                </a>
              </div>
            </div>
            <button type="submit" className="default-btn">
              Login
            </button>
            <div className="or-text">
              <span>Or</span>
            </div>
            <button type="submit" className="google-btn">
              Log In with Google
            </button>
          </form>
        </div>
      </div>
    </AuthLayout>
  );
}
