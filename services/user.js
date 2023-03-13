const fs = require('fs');

const USERS_FILE_PATH = './users.json';

function readUsersFile() {
  const data = fs.readFileSync(USERS_FILE_PATH, 'utf8');
  return JSON.parse(data);
}

function writeUsersFile(data) {
  const jsonString = JSON.stringify(data, null, 2);
  fs.writeFileSync(USERS_FILE_PATH, jsonString, 'utf8');
}

function getAllUsers() {
  return readUsersFile();
}

function getSingleUser(id) {
  const users = readUsersFile();
  const newData = users.filter(item => item.id.toString() === id);
  return newData;
}

function createUser(id, name) {
  const users = readUsersFile();
  const existingUser = users.find(user => user.id === id);
  if (existingUser) {
    throw new Error('User ID already exists');
  }
  const newUser = { id, name };
  users.push(newUser);
  writeUsersFile(users);
}

function updateUser(id, name) {
  const users = readUsersFile();
  const userIndex = users.findIndex(user => user.id.toString() === id);
  if (userIndex === -1) {
    throw new Error('User not found');
  }
  users[userIndex].name = name;
  writeUsersFile(users);
}

function deleteUser(id) {
  const users = readUsersFile();
  const userIndex = users.findIndex(user => user.id.toString() === id);
  if (userIndex === -1) {
    throw new Error('User not found');
  }
  users.splice(userIndex, 1);
  writeUsersFile(users);
}

module.exports = {
  getAllUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
};
