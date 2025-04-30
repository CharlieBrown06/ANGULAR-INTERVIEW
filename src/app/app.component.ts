import { Component,OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

 
@Component({
  selector: 'app-root',
  standalone:true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule]
})
export class AppComponent implements OnInit {
  bookList$: Observable<string[]> = of(['📙', '📕', '📗', '📘']).pipe(delay(1000));
  bookList: string[] = [];

  ngOnInit() {
    this.bookList$.subscribe((bookList) => {
      this.bookList = bookList;
    });
  }
}