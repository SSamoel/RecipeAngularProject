import { Component, OnInit } from '@angular/core';
import { Blogservices } from '../shared/services/blogservices';

@Component({
  selector: 'app-blogs',
  standalone: false,
  templateUrl: './blogs.html',
  styleUrl: './blogs.css'
})
export class Blogs implements OnInit{

  blogs: any[] = [];

  constructor(private blogService : Blogservices){}

  ngOnInit(): void {
    this.blogService.getBlogs().subscribe((data)=>{
      this.blogs = data.blogs
    })
  }

}
