import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { Increment, Decrement } from 'src/app/reducers/counter.actions';

@Component({
  selector: 'alt-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {
  title: string;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.title = environment.title;
  }

  onClick = (operation: string) => {
    operation === 'sum'
    ? this.store.dispatch(new Increment())
    : this.store.dispatch(new Decrement());
  }

}
