import { Component, signal, OnInit } from '@angular/core';
import { Authentication } from './services/authentication';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App  {

  protected readonly title = signal('RecipeBook');

  loadedFeature : string ='recipe';

   constructor(private authService: Authentication) {}

  onNavigate(feature : string){
    this.loadedFeature = feature;
  }
}
