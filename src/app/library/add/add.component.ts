import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BooksService } from '../../books.service';
import { Book } from '../../types/BookType';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  book: Book;
  books: Array<Book> = [];
  constructor(private route: ActivatedRoute, private bookService: BooksService, private location: Location) { }
  ngOnInit() {
    let id: string = this.route.snapshot.paramMap.get('id');
    this.addBook(id);
  }

  addBook(id: string) {
    this.bookService.getBookById(id).subscribe((book) => {this.book = (this.bookService.constructArray([book])[0]); this.bookService.addToLibrary(this.book);});
    
    // location.href = "library"
  }


}
