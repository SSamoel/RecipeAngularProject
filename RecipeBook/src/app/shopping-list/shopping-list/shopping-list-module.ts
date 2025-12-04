import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingListRoutingModule } from './shopping-list-routing-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShoppingList } from '../shopping-list';
import { ShoppingEdit } from '../shopping-edit/shopping-edit';


@NgModule({
  declarations: [

    ShoppingList,
    ShoppingEdit,
  ],
  imports: [
    CommonModule,
    ShoppingListRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ShoppingList,
    ShoppingEdit,
  ]
})
export class ShoppingListModule { }
