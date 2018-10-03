import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BooksService} from '../books.service'
import { Book } from '../types/BookType';
@Component({
  selector: 'app-bookdetail',
  templateUrl: './bookdetail.component.html',
  styleUrls: ['./bookdetail.component.css']
})
export class BookdetailComponent implements OnInit {
  id: string;
  bookDetail: Book;
  constructor(private route: ActivatedRoute, private bookService: BooksService ) { }
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.bookService.getBookById(this.id).subscribe((book) => this.bookDetail = this.bookService.constructArray([book])[0]);
  }




}
