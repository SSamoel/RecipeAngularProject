import { NgForm, FormsModule, FormGroup, FormBuilder, Validators, FormControl, FormArray, Form } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../../../../environments/environment';
import { RecipesDashboardServices } from '../../services/recipes-dashboard-services';

@Component({
  selector: 'app-add-new-recipe',
  standalone: false,
  templateUrl: './add-new-recipe.html',
  styleUrl: './add-new-recipe.css'
})
export class AddNewRecipe implements OnInit {
  apiUrl = environment.apiBaseUrl;
  recipeForm!: FormGroup;
  mealTypes = ['Breakfast', 'Lunch', 'Dinner', 'Snack'];


  constructor(
    private fb: FormBuilder,
    private http : HttpClient,
    private router : Router,
    private recipesDashboardServices : RecipesDashboardServices
  ) {}
  ngOnInit(): void {
    this.recipeForm = this.fb.group({
      name: new FormControl('', Validators.required),
      ingredients: new FormArray([
        new FormControl('', Validators.required)
      ]),
      instructions: new FormArray([
        new FormControl('',Validators.required)
      ]),
      prepTimeMinutes : new FormControl('', Validators.required),
      cookTimeMinutes : new FormControl('', Validators.required),
      servings : new FormControl('',Validators.required),
      difficulty : new FormControl('',Validators.required),
      cuisine : new FormControl('',Validators.required),
      caloriesPerServing : new FormControl('',Validators.required),
      tags : new FormArray([
        new FormControl('',Validators.required),
      ]),
      image : new FormControl('',Validators.required),
      rating : new FormControl('',Validators.required),
      reviewCount : new FormControl('',Validators.required),
      mealType : new FormControl('',Validators.required),
    })
  }

  get ingredients() {
    return this.recipeForm.get('ingredients') as FormArray;
  }

  addIngredient() {
    this.ingredients.push(new FormControl('', Validators.required));
  }

  removeIngredient(index: number) {
    this.ingredients.removeAt(index);
  }

  get instructions(){
    return this.recipeForm.get('instructions') as FormArray;
  }

  addInstruction(){
    this.instructions.push(new FormControl('',Validators.required))
  }

  removeInstruction(index:number){
    this.instructions.removeAt(index);
  }

  get tags(){
    return this.recipeForm.get('tags') as FormArray;
  }

  addTag(){
    this.tags.push(new FormControl('',Validators.required));
  }

  removeTag(index:number){
    this.tags.removeAt(index);
  }

  submitForm() {
    if (this.recipeForm.invalid) return;
    const recipeData = this.recipeForm.value;
    this.recipesDashboardServices.addRecipe(recipeData).subscribe({
      next:(res) => {
        console.log('Recipe added:', res);
        this.router.navigate(['/dashboard/recipes-dashboard']);
      },
      error:(err) => {
        console.log(err);
      }
    })
  }
}
