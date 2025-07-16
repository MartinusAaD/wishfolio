import React from "react";
import styles from "./SignIn.module.css";
import Button from "../../components/Button/Button";
import { useState } from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className={styles.formWrapper}>
      <form className={styles.signInForm} onSubmit={handleSubmit}>
        {/* Login Email */}
        <div className={styles.groupContainer}>
          <label htmlFor="email" className={styles.label}>
            Email:
          </label>
          <input
            type="email"
            name="email"
            id="loginEmail"
            className={styles.input}
            onChange={handleChange}
            value={formData.email}
          />
          <p className={styles.feedbackMessage}></p>
        </div>
        {/* Password */}
        <div className={styles.groupContainer}>
          <label htmlFor="password" className={styles.label}>
            Password:
          </label>
          <input
            type="password"
            name="password"
            id="loginPassword"
            className={styles.input}
            onChange={handleChange}
            value={formData.password}
          />
          <p className={styles.feedbackMessage}></p>
        </div>
        <div className={styles.groupContainer}>
          <Button className={styles.submitButton}>Log In</Button>
        </div>

        <div className={styles.infoContainer}>
          <span>
            Don't have an account? Sign up <Link>here!</Link>
          </span>
          <span>
            Forgot your password? Reset <Link>here!</Link>
          </span>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
