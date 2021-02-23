import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  currentYear: any;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.currentYear = new Date().getFullYear().toString();
  }

  goto(url: string): void {
    this.router.navigateByUrl('/' + url);
  }

}
