import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { TodoState } from '../store/todo.reducers';
import { createTodo, getTodo } from '../store/todo.action';
import Todo from '../model/todo.model';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {
  TodoState$: Observable<TodoState>;
  TodoSubscription: Subscription;
  title: string;
  completed = false;
  TodoList: Todo[];

  constructor(
    private store: Store<TodoState>
  ) { }

  ngOnInit() {
    this.TodoState$ = this.store.pipe(select('todos'));
    this.TodoSubscription = this.TodoState$.pipe(map(x => this.TodoList = x.TodoList)).subscribe();
    this.store.dispatch(getTodo());
  }

  createTodo() {
    this.store.dispatch(createTodo({ title: this.title, isCompleted: this.completed }));
    this.title = '';
    this.completed = false;
  }
  
  ngOnDestroy() {
    this.TodoSubscription.unsubscribe();
  }
}
