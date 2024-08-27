import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddToDoComponent } from './lib/component/add-to-do/add-to-do.component';
import { ToDoItemsComponent } from './lib/component/to-do-items/to-do-items.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, AddToDoComponent, ToDoItemsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ToDo';
}
