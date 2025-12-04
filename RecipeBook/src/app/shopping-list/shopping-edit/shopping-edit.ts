import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild, OnDestroy } from '@angular/core';
import { Ingredintes } from '../../shared/ingredintes.model';
import { ShoppingListServices } from '../../services/shopping-list-services';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  standalone: false,
  templateUrl: './shopping-edit.html',
  styleUrl: './shopping-edit.css'
})
export class ShoppingEdit  implements OnInit , OnDestroy{
  @ViewChild('f',{static : true}) shoppingListForm : NgForm | undefined;

  subscription : Subscription | undefined;
  editedIndex : number | undefined ;
  editMode : boolean = false;
  editedItem : Ingredintes | undefined;
  constructor(private shoppingListService : ShoppingListServices){

  }

  ngOnInit(): void {
    this.subscription = this.shoppingListService.startedEditing.subscribe((index:number)=>{
      this.editMode = true;
      this.editedIndex = index;
      this.editedItem = this.shoppingListService.getIngredientByIndex(index);
      this.shoppingListForm?.setValue({
        name : this.editedItem.name,
        amount : this.editedItem.amount
      })
      })
    }

    onAddItem(form : NgForm){
      const value = form.value;
      const ingredient = new Ingredintes(
      value.name , value.amount
      );
      if(this.editMode && this.editedIndex !== undefined){
        this.shoppingListService.UpdateIngredients(this.editedIndex , ingredient);
      }else {
    // this.ingredientAdded.emit(ingredient);
    this.shoppingListService.addIngredint(ingredient);
      }
      this.editMode = false;
      form.reset();
  }

  onClear(){
    this.shoppingListForm?.reset();
    this.editMode = false;
  }

  onDelete(){
    if (this.editedIndex !== undefined){
    this.shoppingListService.deleteIngredients(this.editedIndex);
    this.onClear();
    }
  }

    ngOnDestroy(): void {
      this.subscription?.unsubscribe();
  }

}
