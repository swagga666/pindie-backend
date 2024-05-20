const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.statics.findUserByCredentials = function (email, password) {
  return this .findOne({ email })
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
}

const user = mongoose.model("user", userSchema);

module.exports = user;