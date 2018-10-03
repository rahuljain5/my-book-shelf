import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from './types/BookType';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  url: string = "https://www.googleapis.com/books/v1/volumes";
  apiKey: string = ""
  books: Array<Book> = [];
  constructor(private http: HttpClient) { }

  generateUrl(name: string) {
    return (this.url + "?q=" + name + "&key=" + this.apiKey);
  }

  getBookByName(name: string): Observable<any> {

    // console.log();

    return this.http.get<any>(this.generateUrl(name));
  }

  getBookById(id: string): Observable<any> {
    return this.http.get<any>(this.url + "/" + id + "?key=" + this.apiKey);
  }

  constructArray(books): Array<Book> {
    let booksInfo: Array<Book> = [];
    books.forEach(book => {
      let volume: Book = {
        id: book.id,
        authors: book.volumeInfo.authors,
        categories: book.volumeInfo.categories,
        description: book.volumeInfo.description,
        language: book.volumeInfo.language,
        pageCount: book.volumeInfo.pageCount,
        title: book.volumeInfo.title,
        thumbnail: book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : ''
      }
      booksInfo.push(volume);
    });
    console.log(booksInfo);
    return booksInfo;
  }

  addToLibrary(book: Book) {
    this.books.push(book);
    console.log(this.books);
  }
  removeFromLibrary(id:string){
    let index: number = this.books.indexOf(this.books.find(b => (b.id === id)));
    this.books.splice(index, 1);
  }
}
