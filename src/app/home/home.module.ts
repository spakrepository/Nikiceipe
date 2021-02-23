import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {FormsModule} from '@angular/forms';
import { FilterPipe } from '../pipes/filter.pipe';
import { HttpClientModule } from '@angular/common/http';
import { DummyService } from '../services/dummy.service';
import { CustomSanitizationPipe } from '../pipes/custom-sanitization.pipe';



@NgModule({
  declarations: [HomeComponent, FilterPipe, CustomSanitizationPipe],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    HomeRoutingModule
  ],
  providers: [
    DummyService
  ]
})
export class HomeModule { }
