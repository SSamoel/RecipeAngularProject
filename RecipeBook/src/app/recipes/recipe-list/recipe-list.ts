import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipesSercices } from '../../services/recipes-sercices';
import { ActivatedRoute, Router } from '@angular/router';
import { relative } from 'path';

@Component({
  selector: 'app-recipe-list',
  standalone: false,
  templateUrl: './recipe-list.html',
  styleUrl: './recipe-list.css'
})
export class RecipeList implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = []

  constructor(private recipeService: RecipesSercices, private router: Router, private activatedRoute: ActivatedRoute) { }
  // onRecipeSelected(recipe: Recipe) {
  //   this.recipeWasSelected.emit(recipe);
  // }

ngOnInit(): void {
  this.recipes = this.recipeService.getService();
  this.recipeService.recipeChanged.subscribe((recipes: Recipe[]) => {
      console.log('📢 Recipes received in RecipeList:', recipes);

    this.recipes = recipes;
  });
}



  onNewRecipe() {
    this.router.navigate(['new'], { relativeTo: this.activatedRoute });
  }

}
