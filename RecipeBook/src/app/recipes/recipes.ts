import { Component, OnDestroy, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipesSercices } from '../services/recipes-sercices';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipes',
  standalone: false,
  templateUrl: './recipes.html',
  styleUrl: './recipes.css'
})
export class Recipes implements OnInit, OnDestroy {
  recipes: Recipe[] = [];
  recipeSubscription: Subscription | undefined;

  constructor(private recipeService: RecipesSercices) { }

  ngOnInit(): void {
    this.recipeSubscription = this.recipeService.recipeChanged.subscribe(
      (recipes: Recipe[]) => {
        this.recipes = recipes;
    })
  }

  ngOnDestroy(): void {
    this.recipeSubscription?.unsubscribe();
  }
}
