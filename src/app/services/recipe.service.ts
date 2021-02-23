import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(
    private http: HttpClient
  ) { }

  public getRecipe(): Observable<any> {
    return this.http.get('/assets/data/recipe.json');
  }

}
