import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from './header/header';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Footer } from './footer/footer';



@NgModule({
  declarations: [
    Header,
    Footer
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    Header,
    Footer
  ]
})
export class CoreModule { }
