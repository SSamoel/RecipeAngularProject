import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Blogservices {
  constructor(private http: HttpClient) { }

  getBlogs() {
    return this.http.get<any>('assets/data/blogs.json');
  }
}
