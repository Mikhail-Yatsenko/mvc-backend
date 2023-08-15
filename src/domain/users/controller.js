const userModel = require('./model');

module.exports = {
    getAll: (req, res) => {
        return res.render('users.hbs', {
            users: userModel.getAll()
        })
    },
    create: (req, res) => {
        try {
            const {username, age} = req.body;

            if (!age || !username) {
                throw new Error('Не указан username или возраст')
            }

            userModel.create({username, age});

            return res.redirect('/users')
        } catch (e) {
            return res.render('users-error.hbs', {
                message: e.message,
            })
        }
    },
    removeById: (req, res) => {
        try {
            const id = req.query.id;

            if (!id || id === 'undefined') {
                throw new Error('Не указан id')
            }

            userModel.removeById({id});

            return res.render('users.hbs', {
                users: userModel.getAll()
            })
        } catch (e) {
            return res.render('users-error.hbs', {
                message: e.message,
            })
        }
    }
}
