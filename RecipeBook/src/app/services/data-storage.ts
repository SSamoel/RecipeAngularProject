import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { exhaustMap, map, take, tap } from 'rxjs';
import { Recipe } from '../recipes/recipe.model';
import { RecipesSercices } from './recipes-sercices';
import { User } from '../user.model';
import { Authentication } from './authentication';


@Injectable({
  providedIn: 'root'
})
export class DataStorage {
  constructor(
    private http: HttpClient,
    private recipesService: RecipesSercices,
    private authenticationService: Authentication
  ) { }

 storeRecipes() {
  this.authenticationService.user.pipe(
    take(1),
    exhaustMap((user: User | null) => {
      if (!user || !user.token) {
        throw new Error('User not authenticated');
      }

      const recipes = this.recipesService.getService();
      return this.http.put(
        'https://group1-project-9d00d-default-rtdb.firebaseio.com/recipes.json',
        recipes,
        {
          params: new HttpParams().set('auth', user.token)
        }
      );
    })
  ).subscribe({
    next: response => console.log('✅ Stored recipes:', response),
    error: err => console.error('❌ Store failed:', err)
  });
}


  fetchRecipes() {
    return this.authenticationService.user.pipe(
      take(1),
      exhaustMap((user: User | null) => {
        if (!user || !user.token) {
          throw new Error('User not authenticated');
        }

        return this.http.get<{ [key: string]: Recipe }>(
          'https://group1-project-9d00d-default-rtdb.firebaseio.com/recipes.json',
          {
            params: new HttpParams().set('auth', user.token)
          }
        );
      }),
      map((responseData: { [key: string]: Recipe }) => {
        const recipesArray: Recipe[] = [];
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            recipesArray.push(responseData[key]);
          }
        }
        return recipesArray;
      }),
      tap((recipes) => {
        // ✅ this updates your RecipesService automatically
        this.recipesService.setRecipes(recipes);
      })
    );
  }
}
