export interface ToDoInterface {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface ToDoState {
  todos: ToDoInterface[];
  activePage: number;
  totalPages: number;
}
