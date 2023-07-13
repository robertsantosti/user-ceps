import { LocalStorageService } from "./LocalStorage.service";

const Get = () => {
  return LocalStorageService.get('users');
}

const Create = (data) => {
  const users = Get();

  data = {
    id: users.length + 1,
    ...data,
  }

  LocalStorageService.set('users', [...users, data]);
}

const Show = (id) => {
  return Get().find(user => user.id === id);
}

const ShowByEmail = (email) => {
  return Get().find(user => user.email === email);
}

const Delete = (id) => {
  LocalStorageService.set('users', Get().filter(user => user.id !== id));
}

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