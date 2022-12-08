import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  title = 'BindingUp';
  favBooks = [
    { title: 'Principles' },
    { title: 'The Story of Success' },
    { title: 'Extreme Economies' },
  ];

  onBookAdded(eventData: { title: string }) {
    this.favBooks = this.favBooks.concat({
      title: eventData.title,
    });
  }

  constructor() { }

  ngOnInit(): void {
  }

}
