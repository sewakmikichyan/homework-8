export const validation = ({ username, email, password }, forRegister) => {
    const errors = {};

    const email_pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const password_pattern = /^.{8,}$/;
    const username_pattern = /^.{8,}$/;

    if (email == "") {
        errors.email = "Email shoud don't be empty!"
    } else if (!email_pattern.test(email)) {
        errors.email = "Email didn't match!";
    } else {
        errors.email = "";
    }

    if (password == "") {
        errors.password = "Password shoud don't be empty!"
    } else if (!password_pattern.test(password)) {
        errors.password = "Password didn't match!";
    } else {
        errors.password = "";
    }

    if (forRegister) {
        if (username == "") {
            errors.username = "Username shoud don't be empty!"
        } else if (!username_pattern.test(username)) {
            errors.username = "Username didn't match!";
        } else {
            errors.username = "";
        }
    }

    return errors;
}

export default validation;