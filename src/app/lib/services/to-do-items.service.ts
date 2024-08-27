import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ToDoItem } from '../classes/ToDoItem';

@Injectable({
  providedIn: 'root',
})
export class ToDoItemsService {
  private todoItems: ToDoItem[] = [];
  todoItemsUpdated = new Subject<ToDoItem[]>();

  constructor() {
    const storedItems = localStorage.getItem('todoItems');
    if (storedItems) {
      this.todoItems = JSON.parse(storedItems);
    }
  }

  private updateLocalStorage() {
    localStorage.setItem('todoItems', JSON.stringify(this.todoItems));
  }

  getToDoItems() {
    return this.todoItems;
  }

  addToDoItem({ title, description }: { title: string; description: string }) {
    this.todoItems.push(
      new ToDoItem(this.todoItems.length + 1, title, description, false),
    );
    this.todoItemsUpdated.next(this.todoItems.slice()); // Emit the updated todo items
    this.updateLocalStorage();
  }

  markingItem({ id }: { id: number }) {
    const itemIndex = this.todoItems.findIndex((item) => item.id === id);
    if (itemIndex !== -1) {
      this.todoItems[itemIndex].complete = !this.todoItems[itemIndex].complete;
      this.todoItemsUpdated.next(this.todoItems); // Emit the updated todo items
      this.updateLocalStorage();
    }
  }

  removeItem({ id }: { id: number }) {
    const itemIndex = this.todoItems.findIndex((item) => item.id === id);
    if (itemIndex !== -1) {
      this.todoItems.splice(itemIndex, 1);
      this.todoItemsUpdated.next(this.todoItems); // Emit the updated todo items
      this.updateLocalStorage();
    }
  }
}
