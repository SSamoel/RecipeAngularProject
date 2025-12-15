import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';


export interface Recipe {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string[];
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  servings: number;
  difficulty: string;
  cuisine: string;
  caloriesPerServing: number;
  tags: string[];
  userId: number;
  image: string;
  rating: number;
  reviewCount: number;
  mealType: string[];

}

@Injectable({
  providedIn: 'root'
})
export class RecipesSercices {

  private apiUrl = `${environment.apiBaseUrl}recipes`;

  constructor(private http: HttpClient) { }

  getRecipes(limit: number , skip:number){
    return this.http.get<{ recipes: Recipe[], total:number }>(
    `${this.apiUrl}?limit=${limit}&skip=${skip}`);
  }

  getRecipeById(id: number): Observable<Recipe> {
    return this.http.get<Recipe>(`${this.apiUrl}/${id}`);
  }

  updateRecipe(id:number, data:any){
    return this.http.put(`${this.apiUrl}/${id}`,data);
  }
}






