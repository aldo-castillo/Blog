import { useState } from "react";
import { ErrorMessage } from "../interfaces/ErrorMessage.interface";

function Login() {
    const [errorMessages, setErrorMessages] = useState<ErrorMessage>({name: '', message: ''});
    const [isSubmitted, setIsSubmitted] = useState(false);
    //{renderErrorMessage('username')}
    const renderForm = (
        <div className="form">
            <form id="login-form">
                <div className="input-container">
                    <label>Username</label>
                    <input type="text" name="username" required />
                </div>
                <div className="input-container">
                    <label>Password</label>
                    <input type="password" name="password" required />
                </div>
                <div className="button-container">
                    <input type="submit" />
                </div>
            </form>
        </div>
    );
    
    function renderErrorMessage(errorMessage: ErrorMessage) {
        return (
            <div className="error">{errorMessage.message}</div>
        );
    }

    return (renderForm);
};

export default Login;
