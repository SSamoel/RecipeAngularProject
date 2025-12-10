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
}






// addIngredientsToShoppingList(ingredints: Ingredintes[]) {
//   this.shoppingListService.addIngredients(ingredints);
// }


// addRecipe(recipe: Recipe) {
//   this.recipes.push(recipe);
//   this.recipeChanged.next(this.recipes);
// }

// updateRecipe(index: number, newRecipe: Recipe) {
//   this.recipes[index] = newRecipe;
//   this.recipeChanged.next(this.recipes);
// }

// deleteRecipe(index: number) {
//   this.recipes.splice(index, 1);
//   this.recipeChanged.next(this.recipes);
// }
// setRecipes(recipes: Recipe[]) {
//   this.recipes = recipes;
//     console.log('📦 Recipes set in service:', this.recipes);

//   this.recipeChanged.next(this.recipes.slice()); // 🔥 مهم عشان الكومبوننت تعرف بالتغيير
// }


