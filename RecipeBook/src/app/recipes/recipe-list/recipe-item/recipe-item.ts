import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipesSercices } from '../../../services/recipes-sercices';

@Component({
  selector: 'app-recipe-item',
  standalone: false,
  templateUrl: './recipe-item.html',
  styleUrl: './recipe-item.css'
})
export class RecipeItem implements OnInit {

  @Input() recipe!: Recipe;
  @Input() index: number | undefined;

  constructor(private recipeService: RecipesSercices) { }

  ngOnInit(): void {
    console.log(this.recipe);
  }

}
