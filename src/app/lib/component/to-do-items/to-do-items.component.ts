import { Component, OnDestroy, OnInit } from '@angular/core';
import { ToDoItemsService } from '../../services/to-do-items.service';
import { ToDoItem } from '../../classes/ToDoItem';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';

@Component({
  selector: 'app-to-do-items',
  standalone: true,
  imports: [HlmButtonDirective, CommonModule],
  templateUrl: './to-do-items.component.html',
})
export class ToDoItemsComponent implements OnInit, OnDestroy {
  constructor(private todoItemService: ToDoItemsService) {}

  todoItems: ToDoItem[] = [];
  private todoItemsSub!: Subscription;

  ngOnInit() {
    this.todoItems = this.todoItemService.getToDoItems();
    this.todoItemsSub = this.todoItemService.todoItemsUpdated.subscribe(
      (todoItems: ToDoItem[]) => {
        this.todoItems = todoItems;
      },
    );
  }

  ngOnDestroy() {
    this.todoItemsSub.unsubscribe();
  }

  handleMarking(id: number) {
    this.todoItemService.markingItem({ id });
  }

  handleDelete(id: number) {
    this.todoItemService.removeItem({ id });
  }
}
