import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BooksService } from '../books.service';
import { Book } from '../types/BookType';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {
  private books:Array<Book>;
  removed: boolean = false;
  constructor(private booksService: BooksService) {
     this.books = this.booksService.books;
   }
  
  ngOnInit() {
    
  }
  remove(id:string){
    this.removed = true;
    this.booksService.removeFromLibrary(id);
  }
}
