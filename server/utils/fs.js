import fs from 'fs';
const usersFilePath = process.cwd() + '/db/users.json';

export const readUsersFromFile = () => {

    const data = fs.readFileSync(usersFilePath, 'utf8'); // Use usersFilePath to read the file
    console.log(data, "data");

    return JSON.parse(data);
};

export const writeUsersToFile = (users) => {
    fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
};