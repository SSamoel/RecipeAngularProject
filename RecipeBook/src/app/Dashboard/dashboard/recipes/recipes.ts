import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Recipe, RecipesSercices } from '../../../services/recipes-sercices';

@Component({
  selector: 'app-recipes',
  standalone: false,
  templateUrl: './recipes.html',
  styleUrl: './recipes.css'
})
export class Recipes {

  recipes: Recipe[] = [];

  constructor(private recipeService : RecipesSercices , private router : Router){}

  ngOnInit() {
    this.getRecipces();
  }

  getRecipces(){
    this.recipeService.getRecipes(0,0).subscribe(res=>{
      this.recipes = res.recipes;
    });
  }

  editRecipe(id : number){
    this.router.navigate(['/dashboard/editRecipe',id])
  }

  deleteRecipe(){}

}
