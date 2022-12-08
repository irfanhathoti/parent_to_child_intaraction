import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Output() bookTitleCreated = new EventEmitter<{ title: string }>();
  bookTitle !:string;

  constructor() { }

  onAddTitle() {
    this.bookTitleCreated.emit({ title: this.bookTitle });
    console.log(this.bookTitle,this.bookTitleCreated)
  }

}
