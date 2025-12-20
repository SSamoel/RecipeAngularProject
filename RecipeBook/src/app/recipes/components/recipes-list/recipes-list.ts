import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Recipe } from '../../../core/models/recipe.model';
import { RecipesSercices } from '../../services/recipes-sercices';

@Component({
  selector: 'app-recipes-list',
  standalone: false,
  templateUrl: './recipes-list.html',
  styleUrl: './recipes-list.css'
})
export class RecipesList implements OnInit {

  recipes: Recipe[] = [];
  limit = 6;
  skip = 0;
  total = 0;
  loading = false;

  constructor(
    private recipesService: RecipesSercices,
    private route: ActivatedRoute,
    private http: HttpClient
  ) { }
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const query = params['q'];

      if (query) {
        this.searchRecipes(query);
      } else {
        this.recipes = [];
        this.skip = 0;
        this.loadRecipes();
      }
    });
  }

  searchRecipes(query: string) {
    this.http.get(`${environment.apiBaseUrl}recipes/search?q=${query}`)
      .subscribe((res: any) => {
        this.recipes = res.recipes;
      });
    this.loading = false;
  }

  loadRecipes() {
    this.loading = true;
    this.recipesService.getRecipes(this.limit, this.skip).subscribe((data) => {
      this.recipes = [...this.recipes, ...data.recipes];
      this.total = data.total;
      this.skip += this.limit;
      this.loading = false;
    })
  }
}
