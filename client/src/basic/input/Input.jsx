import Styles from "./Input.module.css";

const Input = ({ type = "text", name, placeholder, value, onChange }) => {
    return (
        <input
            className={Styles.input}
            type={type}
            placeholder={placeholder}
            name={name}
            value={value}
            onChange={e => onChange(e)}
            autoComplete={`off`} />
    );
};

export default Input;