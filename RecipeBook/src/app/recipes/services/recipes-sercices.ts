import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Recipe } from '../../core/models/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesSercices {

  private apiUrl = `${environment.apiBaseUrl}recipes`;

  constructor(private http: HttpClient) { }

  getRecipes(limit: number, skip: number) {
    return this.http.get<{ recipes: Recipe[], total: number }>(
      `${this.apiUrl}?limit=${limit}&skip=${skip}`);
  }

  getRecipeById(id: number): Observable<Recipe> {
    return this.http.get<Recipe>(`${this.apiUrl}/${id}`);
  }

  getRecipesTags() {
    return this.http.get<string[]>(`${this.apiUrl}/tags`)
  }

  getRecipeByTag(tag: string): Observable<{ recipes: Recipe[] }> {
    return this.http.get<{ recipes: Recipe[] }>(`${this.apiUrl}/tag/${tag}`)
  }

  getRecipeByMeal(mealType: string): Observable<{ recipes: Recipe[] }> {
    return this.http.get<{ recipes: Recipe[] }>(`${this.apiUrl}/meal-type/${mealType}`)
  }

}






