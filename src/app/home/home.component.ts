import { Component, OnInit } from '@angular/core';
import { Togglescreen } from '../core/togglescreen';
import { DummyService } from '../services/dummy.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  searchText: string;
  receipiData: any[];
  toggleSearchHeading: Togglescreen;

  constructor(
    private dummyService: DummyService
  ) { }

  ngOnInit() {
    this.dummyService.getJson().subscribe((data) => {
      this.receipiData = data;
    });
  }


  getFilteredData(list: any[], search?: string): void {
    const data = list.filter((x) => {
      return x.catrgory.toLowerCase().indexOf(search.toLowerCase()) > -1;
    });
    this.receipiData = data;
  }




}
