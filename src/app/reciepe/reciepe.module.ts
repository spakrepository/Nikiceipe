import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReciepeRoutingModule } from './reciepe-routing.module';
import { ReciepeComponent } from './reciepe.component';
import { RecipeService } from '../services/recipe.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [ReciepeComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ReciepeRoutingModule
  ],
  providers: [RecipeService]
})
export class ReciepeModule { }
