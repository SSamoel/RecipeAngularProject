import { Component, OnInit } from '@angular/core';
import { RecipesSercices } from '../recipes/services/recipes-sercices';
import { Recipe } from '../core/models/recipe.model';
import { Blogservices } from '../shared/services/blogservices';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {

  instagramImages = [
    '/assets/images/img1.jpg',
    '/assets/images/img2.jpg',
    '/assets/images/img3.jpg',
    '/assets/images/img4.jpg',
    '/assets/images/img5.jpg',
    '/assets/images/img6.jpg',
    '/assets/images/img7.jpg',
    '/assets/images/img8.jpg',
    '/assets/images/img9.jpg',
  ];


  tags: string[] = [];
  mealTypes: string[] = [];
  selectedTag: string = '';
  selectedMealType: string = '';
  recipes: Recipe[] = [];
  filteredRecipes: any[] = [];
  blogs: any[] = [];
  limit = 6;
  skip = 0;

  constructor(private recipesService: RecipesSercices , private blogService : Blogservices) { }

  ngOnInit(): void {
    this.recipesService.getRecipes(this.limit, this.skip).subscribe((data) => {
      this.recipes = data.recipes;
      this.filteredRecipes = this.recipes;

      this.mealTypes = [...new Set(
        this.recipes.flatMap((r: any) => r.mealType)
      )]
    });

    this.recipesService.getRecipesTags().subscribe({
      next: (res) => {
        this.tags = res;
      },
      error: (err) => {
        console.error(err);
      }
    });

    this.blogService.getBlogs().subscribe((data)=>{
      this.blogs = data.blogs.slice(0,4);
    })

  }

  applyFilters() {
    this.filteredRecipes = this.recipes.filter(recipe => {
      const tagMatch = !this.selectedTag || recipe.tags.includes(this.selectedTag);
      const mealTypeMatch = !this.selectedMealType || recipe.mealType.includes(this.selectedMealType);
      return tagMatch && mealTypeMatch;
    })
  }

  onTagChange(tag: string) {
    this.selectedTag = tag;
    this.applyFilters();
  }

  onMealTypeChange(mealType: string) {
    this.selectedMealType = mealType;
    this.applyFilters();
  }

  get MainBlog(){
    return this.blogs[0];
  }
}
