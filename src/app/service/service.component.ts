import { Component, OnInit } from '@angular/core';
import { Recipe } from '../core/recipe';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {

  recipeList: Recipe[];

  constructor() { }

  ngOnInit() {
  }
}
