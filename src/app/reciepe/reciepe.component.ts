import { Component, OnInit } from '@angular/core';
import { Recipe } from '../core/recipe';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-reciepe',
  templateUrl: './reciepe.component.html',
  styleUrls: ['./reciepe.component.scss']
})
export class ReciepeComponent implements OnInit {

  recipeList: Recipe[];

  recipeData: Recipe;

  popImg: any;

  popAlt: any;

  constructor(
    private recipeService: RecipeService
  ) { }

  ngOnInit() {
    this.recipeDataList();
    console.log(this.recipeData);
  }


  recipeDataList(): void {
    this.recipeService.getRecipe().subscribe((data: any[]) => {
      this.recipeList = data;
    });
  }

  getRecipe(recipeObj: Recipe): void {
    this.recipeData = recipeObj;
  }

  changePopImgAlt(obj: any): void {
    this.popImg = obj.url;
    this.popAlt = obj.alt;
  }

}
