import { APIUsers } from './baseService/index';

export async function getUser(url) {
  try {
    const response = await APIUsers.get(url);
    return response;
  } catch (error) {
    console.error(error);
  }
  return null;
}

export async function postUser(
  inputName, inputEmail, inputRole, inputSector, inputPassword,
) {
  try {
    await APIUsers.post('signup', {
      name: inputName,
      email: inputEmail,
      role: inputRole,
      sector: inputSector,
      pass: inputPassword,
    });
    alert('Usuario criado');
  } catch (error) {
    console.error(`An unexpected error ocourred while registering a new user.${error}`);
  }
}

export async function loginUser(
  inputEmail, inputPassword, setToken,
) {
  try {
    const response = await APIUsers.post('login', {
      email: inputEmail,
      pass: inputPassword,
    });
    APIUsers.defaults.headers = { 'x-access-token': response.data.token };
    setToken(response.data.token);
  } catch (error) {
    console.error(`Não foi possivel fazer login.${error}`);
  }
}

export const updateUser = async (
  inputName, inputEmail, inputRole, inputSector, inputPassword, id,
) => {
  try {
    await APIUsers.put(`/users/update/${id}`, {
      name: inputName,
      email: inputEmail,
      role: inputRole,
      sector: inputSector,
      pass: inputPassword,
    });
    alert('Usuario atualizado');
  } catch (error) {
    console.error(`An unexpected error occurred while updating the user data.${error}`);
  }
};

export async function deleteUser(id) {
  try {
    await APIUsers.delete(`/users/delete/${id}`);
  } catch (error) {
    console.error(error);
  }
}