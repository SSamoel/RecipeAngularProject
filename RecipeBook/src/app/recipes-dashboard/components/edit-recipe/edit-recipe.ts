import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipesSercices } from '../../../services/recipes-sercices';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-edit-recipe',
  standalone: false,
  templateUrl: './edit-recipe.html',
  styleUrls: ['./edit-recipe.css']
})
export class EditRecipe implements OnInit {

  editRecipeForm!: FormGroup;
  recipeId! : number;
  mealTypes = ['Breakfast', 'Lunch', 'Dinner', 'Snack'];

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private recipeService: RecipesSercices,
    private http : HttpClient,
    private router : Router
  ){}

  ngOnInit(): void {
    this.editRecipeForm = this.fb.group({
      name: [''],
      ingredients: this.fb.array([]),
      instructions: this.fb.array([]),
      prepTimeMinutes: [''],
      cookTimeMinutes: [''],
      servings: [''],
      difficulty: [''],
      cuisine: [''],
      caloriesPerServing: [''],
      tags: this.fb.array([]),
      image: [''],
      rating: [''],
      reviewCount: [''],
      mealType: ['']
    });
    this.loadRecipe();
  }

  loadRecipe() {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.recipeId = Number(idParam);
      this.recipeService.getRecipeById(this.recipeId).subscribe(recipe => {
        this.editRecipeForm.patchValue({
          name: recipe.name,
          ingredients: recipe.ingredients,
          instructions: recipe.instructions,
          prepTimeMinutes: recipe.prepTimeMinutes,
          cookTimeMinutes: recipe.cookTimeMinutes,
          servings: recipe.servings,
          difficulty: recipe.difficulty,
          cuisine: recipe.cuisine,
          caloriesPerServing: recipe.caloriesPerServing,
          tags: recipe.tags,
          image: recipe.image,
          rating: recipe.rating,
          reviewCount: recipe.reviewCount,
          mealType: recipe.mealType
        });
        this.ingredients.clear();
        recipe.ingredients.forEach((ing: string) => {
          this.ingredients.push(this.fb.control(ing));
        });
        this.instructions.clear();
        recipe.instructions.forEach((instr:string)=> {
          this.instructions.push(this.fb.control(instr))
        })
        this.tags.clear();
        recipe.tags.forEach((tag:string) => {
          this.tags.push(this.fb.control(tag));
        })
      })
    }
  }



  get ingredients() {
    return this.editRecipeForm.get('ingredients') as FormArray;
  }

  addIngredient() {
    this.ingredients.push(this.fb.control(''));
  }

  removeIngredient(index: number) {
    this.ingredients.removeAt(index);
  }

  get instructions() {
    return this.editRecipeForm.get('instructions') as FormArray;
  }

  addInstruction() {
    this.instructions.push(this.fb.control(''))
  }

  removeInstruction(index: number) {
    this.instructions.removeAt(index);
  }

  get tags() {
    return this.editRecipeForm.get('tags') as FormArray;
  }

  addTag() {
    this.tags.push(this.fb.control(''));
  }

  removeTag(index: number) {
    this.tags.removeAt(index);
  }

  submitEditedForm(){
    const recipeEditedData = this.editRecipeForm.value;
    this.recipeService.updateRecipe(this.recipeId, recipeEditedData)
    .subscribe({
      next : (res)=>{
        console.log('Updated recipe:', res);
      },
      error : (err)=>{
        console.error('Update failed', err);
      }
    })
    this.router.navigate(['/dashboard/recipes']);
  }
}
