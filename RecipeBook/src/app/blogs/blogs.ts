import { Component, OnInit } from '@angular/core';
import { Blogservices } from '../shared/services/blogservices';

@Component({
  selector: 'app-blogs',
  standalone: false,
  templateUrl: './blogs.html',
  styleUrl: './blogs.css'
})
export class Blogs implements OnInit {

  allBlogs: any[] = [];
  blogs: any[] = [];

  visibleCount = 6;
  step = 3;
  loading = false;

  constructor(private blogService: Blogservices) { }

  ngOnInit(): void {
    this.loading = true;
    this.blogService.getBlogs().subscribe((data) => {
      this.allBlogs = data.blogs;
      this.blogs = this.allBlogs.slice(0, this.visibleCount);
      this.loading = false;
    });
  }

  loadMore() {
    this.loading = true;
    setTimeout(() => {
      this.visibleCount += this.step;
      this.blogs = this.allBlogs.slice(0, this.visibleCount);
      this.loading = false;
    }, 500)
  }
}
