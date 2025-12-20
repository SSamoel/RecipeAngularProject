import { Component, OnInit } from '@angular/core';
import { RecipesSercices } from '../../services/recipes-sercices';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from '../../../core/models/recipe.model';

@Component({
  selector: 'app-recipe-details',
  standalone: false,
  templateUrl: './recipe-details.html',
  styleUrl: './recipe-details.css'
})
export class RecipeDetails  implements OnInit{

  recipe!: Recipe;
  constructor(private recipesService : RecipesSercices , private route : ActivatedRoute){}
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.recipesService.getRecipeById(id).subscribe(data=>{
      this.recipe = data;
      console.log(this.recipe);
    })
  }

}
