import { Component, OnInit } from '@angular/core';
import { RecipesSercices } from '../../services/recipes-sercices';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from '../../../core/models/recipe.model';
import { map, switchMap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-recipe-details',
  standalone: false,
  templateUrl: './recipe-details.html',
  styleUrl: './recipe-details.css'
})
export class RecipeDetails  implements OnInit{

  recipe!: Recipe;
  constructor(private recipesService : RecipesSercices ,
    private route : ActivatedRoute,
    private http: HttpClient){}
  ngOnInit(): void {
    this.route.paramMap.pipe(
      map(params => Number(params.get('id'))),
      switchMap(id => {
      return this.recipesService.getRecipeById(id);
    })
    ).subscribe(data=>{
      this.recipe = data;
      console.log(this.recipe);
    })
  }
}
