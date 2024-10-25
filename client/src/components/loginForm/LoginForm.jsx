import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../basic/button/Button";
import Input from "../../basic/input/Input";
import validation from "../../utils/validation";
import axios from "axios";

const LoginForm = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState({});

    const handleInput = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors(validation(formData));
    };

    return (
        <form id="LoginForm" action="api/login" method="POST" className="form" onSubmit={handleSubmit}>
            <h3 className="h3">Login</h3>
            <div className="inputs-block">
                <div className="block">
                    <Input type="text" placeholder="email" name="email" onChange={handleInput} />
                    <p className="error-description">{errors.email ? errors.email : ""}</p>
                </div>
                <div className="block">
                    <Input type="password" placeholder="password" name="password" onChange={handleInput} />
                    <p className="error-description">{errors.password ? errors.password : ""}</p>
                </div>
                <Button inner="Login" type="submit" />
            </div>
            <p className="p">
                Don't have an account?
                <Link to="/register" className="link">register</Link>
            </p>
        </form>
    );
};

export default LoginForm;