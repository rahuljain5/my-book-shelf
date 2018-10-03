import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { Book } from '../types/BookType';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  // AIzaSyC16fSlBHai1j-qmI5sHfi3yRvvkzyUfYY
  name: string;
  books: Array<Book> = [];
  constructor(private bookService: BooksService) { }

  ngOnInit() { }

  search(e) {
    e.preventDefault();
    this.bookService.getBookByName(this.name).subscribe((books) => this.books = this.bookService.constructArray(books.items));
  }

 
}
