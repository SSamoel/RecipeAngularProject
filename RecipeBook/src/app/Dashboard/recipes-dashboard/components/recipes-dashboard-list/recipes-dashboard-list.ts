import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Recipe } from '../../../../core/models/recipe.model';
import { RecipesDashboardServices } from '../../services/recipes-dashboard-services';
import { RecipesSercices } from '../../../../recipes/services/recipes-sercices';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-recipes-dashboard-list',
  standalone: false,
  templateUrl: './recipes-dashboard-list.html',
  styleUrl: './recipes-dashboard-list.css'
})
export class RecipesDashboardList {
  recipes: Recipe[] = [];
  totalRecipes = 0;
  pageSize = 10;
  currentPage = 1;

  constructor(
    private recipeServices: RecipesSercices,
    private recipesDashboardService: RecipesDashboardServices,
    private router: Router
  ) { }

  ngOnInit() {
    this.getRecipces(this.pageSize, 0);
  }

  onMatPageChange(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.currentPage = event.pageIndex + 1;
    const skip = (this.currentPage - 1) * this.pageSize;
    this.getRecipces(this.pageSize, skip);
  }

  getRecipces(limit: number, skip: number) {
    this.recipeServices.getRecipes(limit, skip).subscribe(res => {
      this.recipes = res.recipes;
      this.totalRecipes = res.total;
    });
  }

  trackById(index: number, recipe: Recipe) {
    return recipe.id;
  }

  editRecipe(id: number) {
    this.router.navigate(['/dashboard/recipes-dashboard/edit', id])
  }

  deleteRecipe(id: number) {
    this.recipesDashboardService.deleteRecipe(id).subscribe({
      next: res => {
        this.recipes = this.recipes.filter(r => r.id !== id);
      },
      error: err => {
        console.error('Delete Recipe failed ', err);
      }
    })
  }
}


