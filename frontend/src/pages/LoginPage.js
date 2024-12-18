import React, { useState } from "react";
import axios from "axios";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");  // For displaying error messages
    const [isLoading, setIsLoading] = useState(false);  // For loading state

    const handleLogin = async (e) => {
        e.preventDefault();
        setErrorMessage("");  // Reset any previous error messages
        setIsLoading(true);  // Set loading to true

        // Client-side validation
        if (!email || !password) {
            setErrorMessage("Email and Password are required.");
            setIsLoading(false);
            return;
        }

        try {
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/auth/login`, {
                email,
                password,
            });
            const { token } = response.data;

            // Store token in sessionStorage for better security
            sessionStorage.setItem("authToken", token);

            alert("Login successful!");
            window.location.href = "/dashboard";  // Redirect after successful login
        } catch (error) {
            setIsLoading(false);  // Set loading to false after request
            if (error.response) {
                // Server errors (e.g., 400 or 500)
                setErrorMessage(error.response.data.message || "Login failed! Please check your credentials.");
            } else {
                // Network errors
                setErrorMessage("An error occurred. Please try again later.");
            }
        }
    };

    return (
        <form onSubmit={handleLogin}>
            <h1>Login</h1>
            {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}  {/* Display error message */}
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <button type="submit" disabled={isLoading}>
                {isLoading ? "Logging in..." : "Login"}
            </button>
        </form>
    );
};

export default LoginPage;
