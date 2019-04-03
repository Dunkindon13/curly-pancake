import {Component, EventEmitter, OnInit} from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit{
  counterChange: EventEmitter<null> = new EventEmitter<null>();
  counter: number;
  output: string;

  constructor() {
    this.counter = 0;
    // A subscribe was added here so that every change in the value of the counter would be applied accordingly.
    this.counterChange.subscribe(
      () => this.output = this.counter.toString()
    );
  }

  // Added functionality to the decrease counter so that every time the decrease button isv pressed, the counter decreases by 1.
  decreaseCounter() {
    this.counter--;
    this.counterChange.emit();
  }

  increaseCounter() {
    this.counter++;
    this.counterChange.emit();
  }

  ngOnInit() :void {
  }
}
