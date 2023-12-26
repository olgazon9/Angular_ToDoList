import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

export interface TodoItem {
  id: number;
  name: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatListModule,
    MatCheckboxModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  items: TodoItem[] = [];
  newItem: string = '';

  addItem() {
    if (this.newItem.trim() !== '') {
      this.items.push({ id: this.getNextId(), name: this.newItem, completed: false });
      this.newItem = '';
    }
  }

  toggleCompletion(item: TodoItem) {
    item.completed = !item.completed;
  }

  deleteItem(item: TodoItem) {
    this.items = this.items.filter(i => i.id !== item.id);
  }

  private getNextId(): number {
    return this.items.length > 0 ? Math.max(...this.items.map(i => i.id)) + 1 : 1;
  }
}
