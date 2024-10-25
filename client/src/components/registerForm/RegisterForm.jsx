import { Link } from "react-router-dom";
import Button from "../../basic/button/Button";
import Input from "../../basic/input/Input";
import { useState } from "react";
import validation from "../../utils/validation";

const RegisterForm = () => {

    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState({});

    const handleInput = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(validation(formData, true));
    };

    return (
        <form id="RegisterForm" action="api/register" method="POST" className="form" onSubmit={handleSubmit}>
            < h3 className="h3" > Register</h3 >
            <div className="inputs-block">
                <div className="block">
                    <Input type="text" placeholder="username" name="username" onChange={handleInput} />
                    <p className="error-description">{errors.username ? errors.username : ""}</p>
                </div>
                <div className="block">
                    <Input type="text" placeholder="email" name="email" onChange={handleInput} />
                    <p className="error-description">{errors.email ? errors.email : ""}</p>
                </div>
                <div className="block">
                    <Input type="password" placeholder="password" name="password" onChange={handleInput} />
                    <p className="error-description">{errors.password ? errors.password : ""}</p>
                </div>
                <Button inner="Register" type="submit" />
            </div>
            <p className="p">
                Already have an account?
                <Link to="/" className="link">login</Link>
            </p>
        </form >
    );
};

export default RegisterForm;