import { RecipesSercices } from './../../services/recipes-sercices';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { describe } from 'node:test';

@Component({
  selector: 'app-recipe-edit',
  standalone: false,
  templateUrl: './recipe-edit.html',
  styleUrl: './recipe-edit.css'
})
export class RecipeEdit  implements OnInit{
id? : number ;
editMode : boolean = false ;
recipeForm ! :FormGroup;


private initForm(){
    let recipeName : any  = '' ;
    let recipeDescription : any = '';
    let recipeImagePath : any = '';
    let recipeIngredients : any = new FormArray([]);

    if(this.editMode){
      if (this.id !== undefined){
      const recipe = this.recipesSercices.getRecipeById(this.id);

      recipeName = recipe.name;
      recipeDescription = recipe.description;
      recipeImagePath = recipe.imagePath;
      if(recipe.ingredintes.length > 0){
        for (let ingredient of recipe.ingredintes){
          recipeIngredients.push(new FormGroup({
            name : new FormControl(ingredient.name ,Validators.required),
            amount : new FormControl(ingredient.amount , Validators.required)
          })
          )
        }
      }
    }
  }
  this.recipeForm = new FormGroup({
    name : new FormControl(recipeName , Validators.required),
    imagePath : new FormControl(recipeImagePath , Validators.required),
    description : new FormControl(recipeDescription , Validators.required),
    ingredients : recipeIngredients
  })

}

constructor(private activatedRoute : ActivatedRoute ,
            private recipesSercices : RecipesSercices,
            private router : Router
           ){}

get ingredientsControls(){
  return (<FormArray>(this.recipeForm.get('ingredients'))).controls;
}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params : Params)=>{
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      console.log(this.editMode);
      this.initForm();
    })
  }

  onAddIngredient(){
    (<FormArray> this.recipeForm.get('ingredients')).push(new FormGroup({
      name : new FormControl('' , Validators.required),
      amount : new FormControl('', [Validators.required , Validators.min(1)])
    }))
  }

  onSubmit(){
    if(this.editMode && this.id !== undefined){
      this.recipesSercices.updateRecipe(this.id , this.recipeForm.value)
    }
    else
    {
      this.recipesSercices.addRecipe(this.recipeForm.value)
    }
    this.onCancel();
  }

  onCancel(){
    this.router.navigate(['../'],{relativeTo : this.activatedRoute})
  }

  onDeleteIngredient(index : number){
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }
}
