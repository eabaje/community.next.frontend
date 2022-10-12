import Head from "next/head";
import Image from "next/image";
import AuthLayout from "../../layout/authLayout";

export default function Register() {
  return (
    <AuthLayout>
      <div className="col-lg-6 col-md-12">
        <div className="register-form">
          <h2>Register</h2>

          <form>
            <div className="form-group">
              <label>Name</label>
              <input type="text" className="form-control" />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input type="email" className="form-control" />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input type="password" className="form-control" />
            </div>

            <div className="form-group">
              <label>Confirm Password</label>
              <input type="password" className="form-control" />
            </div>

            <div className="remember-me-wrap">
              <p>
                <input type="checkbox" id="test1" />
                <label htmlFor="test1">
                  I Accept The <a href="privacy.html">Privacy</a>
                </label>
              </p>
            </div>
            <button type="submit" className="default-btn">
              Register
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
