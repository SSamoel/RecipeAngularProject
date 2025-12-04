import { Injectable } from '@angular/core';
import { Ingredintes } from '../shared/ingredintes.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListServices {

  startedEditing = new Subject<number>();

    ingredintes: Ingredintes[]=[
      new Ingredintes('Apple' , 100),
      new Ingredintes('banana' , 20),
      new Ingredintes('pizza' , 5)
    ]

    getIngredites(){
      return this.ingredintes;
    }

    addIngredint(ingredient : Ingredintes){
      this.ingredintes.push(ingredient)
    }

    addIngredients(ingredients : Ingredintes[]){
      this.ingredintes.push(...ingredients);
    }

    getIngredientByIndex(index : number){
      return this.ingredintes[index];
    }
    UpdateIngredients(index : number , newIngredients : Ingredintes){
      this.ingredintes[index] = newIngredients
    }

    deleteIngredients(index:number){
      this.ingredintes.splice(index , 1);
    }

}
