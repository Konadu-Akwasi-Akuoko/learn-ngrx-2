import { Component } from '@angular/core';
import { ToDoItemsService } from '../../services/to-do-items.service';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmInputDirective } from '@spartan-ng/ui-input-helm';

@Component({
  selector: 'app-add-to-do',
  standalone: true,
  imports: [HlmInputDirective, HlmButtonDirective],
  templateUrl: './add-to-do.component.html',
})
export class AddToDoComponent {
  constructor(private todoItemService: ToDoItemsService) {}

  private title = '';
  private description = '';

  handleTitleChange(event: Event) {
    this.title = (event.target as HTMLInputElement)?.value;
  }

  handleDescriptionChange(event: Event) {
    this.description = (event.target as HTMLInputElement)?.value;
  }

  handleAddToDo() {
    this.todoItemService.addToDoItem({
      title: this.title,
      description: this.description,
    });
  }
}
