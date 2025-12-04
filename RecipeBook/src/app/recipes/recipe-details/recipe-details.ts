import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipesSercices } from '../../services/recipes-sercices';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-details',
  standalone: false,
  templateUrl: './recipe-details.html',
  styleUrl: './recipe-details.css'
})
export class RecipeDetails  implements OnInit{
 recipe?: Recipe;
 id : number | undefined;

constructor(private recipeService : RecipesSercices , private activateRoute : ActivatedRoute , private router : Router){}
  ngOnInit(): void {
    this.activateRoute.params.subscribe((params : Params)=>{
      this.id = +params['id'];
      this.recipe = this.recipeService.getRecipeById(this.id);
    })
  }

addToShoppingList(){
  this.recipeService.addIngredientsToShoppingList(this.recipe!.ingredintes);
}

onEditRecipe(){
  this.router.navigate(['edit'], {relativeTo: this.activateRoute})
}

onDeleteRecipe(){
  this.recipeService.deleteRecipe(this.id!);
  this.router.navigate(['/recipes']);
}
}
