import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Recipe } from '../../../../core/models/recipe.model';
import { RecipesDashboardServices } from '../../services/recipes-dashboard-services';
import { RecipesSercices } from '../../../../recipes/services/recipes-sercices';

@Component({
  selector: 'app-recipes-dashboard-list',
  standalone: false,
  templateUrl: './recipes-dashboard-list.html',
  styleUrl: './recipes-dashboard-list.css'
})
export class RecipesDashboardList {
 recipes: Recipe[] = [];

  constructor(
    private recipeServices : RecipesSercices,
    private recipesDashboardService : RecipesDashboardServices,
    private router : Router
  ){}

  ngOnInit() {
    this.getRecipces();
  }

  getRecipces(){
    this.recipeServices.getRecipes(0,0).subscribe(res=>{
      this.recipes = res.recipes;
    });
  }

  editRecipe(id : number){
    this.router.navigate(['/dashboard/recipes-dashboard/edit',id])
  }

  deleteRecipe(id : number){
    this.recipesDashboardService.deleteRecipe(id).subscribe({
      next: res => {
        console.log('Deleted:', res);
        this.recipes = this.recipes.filter(r => r.id !== id);
      },
      error: err => {
        console.error('Delete Recipe failed ', err);
      }
    })
  }
}


