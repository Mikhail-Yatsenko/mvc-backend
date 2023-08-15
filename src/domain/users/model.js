let users = [
    {id: '1', username: 'Джо', age: 27}
]

module.exports = {
    create: ({username, age}) => {
        const newUser = {
            id: String(Date.now()),
            username,
            age
        }

        if (!users.find(user => user.username === username)) {
            users.push(newUser);
        } else {
            throw new Error('Такой пользователь уже существует')
        }
    },
    removeById: ({id}) => {
        const foundUserIndex = users.findIndex(user => user.id === String(id));

        if (foundUserIndex === -1) {
            throw new Error('Такого пользователя не существует');
        } else {
            users.splice(foundUserIndex, 1);
        }
    },
    getAll: () => {
        return users;
    },
    getById: ({id}) => {
        return users.find(user => user.id === id);
    }
}
