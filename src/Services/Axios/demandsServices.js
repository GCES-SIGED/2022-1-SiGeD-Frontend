import { APIDemands } from './baseService';

export async function getCategories() {
  try {
    const response = await APIDemands.get('category');
    return response;
  } catch (error) {
    console.error(`An unexpected error ocourred while getting categories.${error}`);
  }
  return null;
}

export async function createCategory(name, description, color) {
  try {
    const response = await APIDemands.post('category/create', {
      name,
      description,
      color,
    });
    if (response.data.status) {
      alert('Preencha todos os campos para poder criar uma nova categoria');
    }
  } catch (error) {
    alert('Não foi possível criar a nova categoria, tente novamente.');
  }
}

export async function updateCategory(name, description, color, id) {
  try {
    const response = await APIDemands.put(`category/update/${id}`, {
      name,
      description,
      color,
    });
    if (response.data.status) {
      alert('Preencha todos os campos para poder criar uma nova categoria');
    }
  } catch (error) {
    alert('Não foi possível atualizar a categoria, tente novamente.');
  }
}