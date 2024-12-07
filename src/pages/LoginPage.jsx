import React, { useState } from "react";
import userData from "../assets/data.json";

function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState({});

    const handleLogin = (e) => {
        e.preventDefault();

        // Validate inputs
        const newError = {};
        if (!username) {
            newError.username = "Username can't be empty !!";
        }
        if (!password) {
            newError.password = "Password can't be empty !!";
        }

        setError(newError);

        // If there are validation errors, stop further processing
        if (Object.keys(newError).length > 0) return;

        // Check user credentials
        const user = userData.find(
            (user) => user.username === username && user.password === password
        );

        if (user) {
            setError({});
            alert("Login Successful! ✅");
        } else {
            setError({ fail: "Invalid username or password ❌" });
        }
    };

    return (
        <div>
            <h1 className="firsth1">Login Page</h1>
            <form onSubmit={handleLogin}>
                <label>
                    Username:
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </label>
                {error.username && <p className="error">{error.username}</p>}
                <br />
                <label>
                    Password:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                {error.password && <p className="error">{error.password}</p>}
                <br />
                <button type="submit">Login</button>
                {error.fail && <p className="error">{error.fail}</p>}
            </form>
        </div>
    );
}

export default LoginPage;
