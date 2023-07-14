import { LocalStorageService } from "./LocalStorage.service";

//Method GET
const Get = () => {
  return LocalStorageService.get('users');
}

//Method POST
const Create = (data) => {
  const users = Get();

  data = {
    id: users.length + 1,
    ...data,
  }

  LocalStorageService.set('users', [...users, data]);
}

//Method GET
const Show = (id) => {
  return Get().find(user => user.id === id);
}

//Method GET
const ShowByEmail = (email) => {
  return Get().find(user => user.email === email);
}

//Method DELETE
const Delete = (id) => {
  LocalStorageService.set('users', Get().filter(user => user.id !== id));
}

//Method PUT/PATCH
const Update = (id, data) => {
  const users = Get();

  users[users.find(user => user.id === id).indexOf] = data;

  LocalStorageService.set('users', users)
}

export const UserService = {
  Get,
  Create,
  Show,
  ShowByEmail,
  Delete,
  Update
}