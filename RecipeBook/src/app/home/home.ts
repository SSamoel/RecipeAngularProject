import { Component, OnInit } from '@angular/core';
import { RecipesSercices } from '../recipes/services/recipes-sercices';
import { Recipe } from '../core/models/recipe.model';
import { Blogservices } from '../shared/services/blogservices';
import { BehaviorSubject, combineLatest, map } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {

  // tags: string[] = [];
  private tagSubject = new BehaviorSubject<string>('');
  // mealTypes: string[] = [];
  private mealTypeSubject = new BehaviorSubject<string>('');
  // recipes: Recipe[] = [];
  private recipesSubject = new BehaviorSubject<Recipe[]>([]);
  selectedTag: string = '';
  selectedMealType: string = '';

  tags: string[] = [];
  mealTypes: string[] = [];
  blogs: any[] = [];
  filteredRecipes: any[] = [];
  limit = 6;
  skip = 0;

  constructor(private recipesService: RecipesSercices, private blogService: Blogservices) { }

  ngOnInit(): void {
    // this.recipesService.getRecipes(this.limit, this.skip).subscribe((data) => {
    //   this.recipes = data.recipes;
    //   this.filteredRecipes = this.recipes;

    //   this.mealTypes = [...new Set(
    //     this.recipes.flatMap((r: any) => r.mealType)
    //   )]
    // });

    // this.recipesService.getRecipesTags().subscribe({
    //   next: (res) => {
    //     this.tags = res;
    //   },
    //   error: (err) => {
    //     console.error(err);
    //   }
    // });

    this.recipesService.getRecipes(this.limit, this.skip).subscribe((data) => {
      this.recipesSubject.next(data.recipes);
      this.mealTypes = [...new Set(data.recipes.flatMap((r: any) => r.mealType))];
    });

    this.recipesService.getRecipesTags().subscribe({
      next: (res) => {
        this.tags = res;
      },
      error: (err) => console.error(err)
    });

    combineLatest({
      tag: this.tagSubject,
      mealType: this.mealTypeSubject,
      allRecipes: this.recipesSubject
    }).pipe(
      map(({ tag, mealType, allRecipes }) => {
        return allRecipes.filter(recipe => {
          const tagMatch = !tag || recipe.tags.includes(tag);
          const mealTypeMatch = !mealType || recipe.mealType.includes(mealType);
          return tagMatch && mealTypeMatch;
        });
      })
    ).subscribe(filteredList => {
      this.filteredRecipes = filteredList;
    });
    this.blogService.getBlogs().subscribe((data) => {
      this.blogs = data.blogs.slice(0, 5);
    })
  }

  // applyFilters() {
  //   this.filteredRecipes = this.recipes.filter(recipe => {
  //     const tagMatch = !this.selectedTag || recipe.tags.includes(this.selectedTag);
  //     const mealTypeMatch = !this.selectedMealType || recipe.mealType.includes(this.selectedMealType);
  //     return tagMatch && mealTypeMatch;
  //   })
  // }

  onTagChange(tag: string) {
    this.selectedTag = tag;
    this.tagSubject.next(tag);
  }

  onMealTypeChange(mealType: string) {
    this.selectedMealType = mealType;
    this.mealTypeSubject.next(mealType);
  }

  get MainBlog() {
    return this.blogs[0];
  }
}
