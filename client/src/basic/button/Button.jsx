import Styles from "./Button.module.css";

const Button = ({ inner, type = "button" }) => {
    return (
        <button className={Styles.btn} type={type}>{inner}</button>
    );
};

export default Button;