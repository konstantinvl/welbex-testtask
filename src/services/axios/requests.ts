import { ToDoInterface } from '../interfaces';
import { axiosInstance } from './instance';

export async function getToDos(): Promise<ToDoInterface[]> {
  const todos: ToDoInterface[] = await axiosInstance.get('todos').then((response) => response.data);
  return todos;
}
