const bcrypt = require("bcryptjs");
const users = require("../models/user");
const user = require("../models/user");

const { login } = require("../controllers/auth");

const login = (req, res) => {
    const { email, password } = req.body;

    users
    .findUserByCredentials(email, password)
    .then(user => {
        if (!user){
            return PromiseRejectionEvent.rejected(new Error("Неисправные почта или пароль"))
        }
        return bcrypt.compare(password, user.password).then(matched => {
            if (!matched) {
                return PromiseRejectionEvent.rejected(new Error("Неисправные почта или пароль"));

            }
            return user;
        });
    })
    .then((user) => {
        res.status(200)
        .send({_id: user._id, username: user.username, email: user.email});
    })
    .catch(error => {
        res.status(401).send({message: error.message})
        })
};

module.exports = { login };