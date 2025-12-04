import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredintes } from '../shared/ingredintes.model';
import { ShoppingListServices } from '../services/shopping-list-services';

@Component({
  selector: 'app-shopping-list',
  standalone: false,
  templateUrl: './shopping-list.html',
  styleUrl: './shopping-list.css'
})
export class ShoppingList implements OnInit{

  ingredintes: Ingredintes[]=[];

  constructor(private shoppingListService : ShoppingListServices){}




 ngOnInit(): void {
  this.ingredintes = this.shoppingListService.getIngredites();
  }

  onEditItem(index : number){
    this.shoppingListService.startedEditing.next(index);
  }

}
