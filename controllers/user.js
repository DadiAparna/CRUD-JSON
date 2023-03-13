const userService = require('../services/user');

function getAllUsers(req, res) {
  const users = userService.getAllUsers();
  res.json(users);
}

function getSingleUser(req, res) {
  const { id } = req.params;
  const newData = userService.getSingleUser(id);
  res.send(newData);
}

function createUser(req, res) {
  const { id, name } = req.body;
  userService.createUser(id, name);
  res.send('Data stored');
}

function updateUser(req, res) {
  const { id } = req.params;
  const { name } = req.body;
  userService.updateUser(id, name);
  res.send('User updated');
}

function deleteUser(req, res) {
  const { id } = req.params;
  userService.deleteUser(id);
  res.send('User deleted');
}

module.exports = {
  getAllUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
};
