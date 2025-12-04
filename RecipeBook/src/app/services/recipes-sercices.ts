import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import { Ingredintes } from '../shared/ingredintes.model';
import { ShoppingListServices } from './shopping-list-services';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipesSercices {
  recipes: Recipe[] = [
    // new Recipe('Test Recipe1', 'This is test 1 description for recipe', 'assets/images/recipe.jpg',[
    //   new Ingredintes ("ing 1", 10),
    //   new Ingredintes ("ing 2", 20),
    // ]),
    // new Recipe('Test Recipe2', 'This is test 2 description for recipe', 'assets/images/recipe.jpg',[
    //   new Ingredintes ("ing 3", 30),
    //   new Ingredintes ("ing 4", 40),
    // ]),
    // new Recipe('Test Recipe3', 'This is test 3 description for recipe', 'assets/images/recipe.jpg',[
    //   new Ingredintes ("ing 5", 50),
    //   new Ingredintes ("ing 6", 60),
    // ])
  ];
  recipeSelected = new Subject<Recipe>();
  recipeChanged = new Subject<Recipe[]>();

  constructor(private shoppingListService: ShoppingListServices) { }


  getService() {
    return this.recipes;
  }

  addIngredientsToShoppingList(ingredints: Ingredintes[]) {
    this.shoppingListService.addIngredients(ingredints);
  }

  getRecipeById(id: number) {
    return this.recipes[id];
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipeChanged.next(this.recipes);
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipeChanged.next(this.recipes);
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipeChanged.next(this.recipes);
  }
  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
      console.log('📦 Recipes set in service:', this.recipes);

    this.recipeChanged.next(this.recipes.slice()); // 🔥 مهم عشان الكومبوننت تعرف بالتغيير
  }

}
