import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipesDashboardServices {

  private apiUrl = `${environment.apiBaseUrl}recipes`;

  constructor(private http: HttpClient) { }

  addRecipe(data:any){
    return this.http.post(`${this.apiUrl}/add`, data)

  }
  updateRecipe(id:number, data:any){
    return this.http.put(`${this.apiUrl}/${id}`,data);
  }

  deleteRecipe(id:number){
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

}
