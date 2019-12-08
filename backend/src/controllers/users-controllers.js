const userCtrl = {};

userCtrl.getUsers = (req, res) => res.send('GET Users ');

userCtrl.createUser = (req, res) => res.send('POST Users');

userCtrl.deleteUser = (req, res) => res.send('DELETE Users');

module.exports = userCtrl;