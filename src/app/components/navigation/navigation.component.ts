import { Component, ElementRef, OnInit, ViewChild, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  changeTitle: string;
  toggleMenuDiv = false;

  constructor(
    private router: Router,
    private render2: Renderer2
  ) {
  }

  ngOnInit() {
  }

  goto(url: string): void {
    this.router.navigateByUrl('/' + url);
    this.changeTitle = ': ' + url.toString();
  }

  toggleMenu(): void {
    this.toggleMenuDiv = false;
  }

  toggleMenuEvent(): void {
    if (this.toggleMenuDiv) {
      this.toggleMenuDiv = false;
    } else {
      this.toggleMenuDiv = true;
    }
  }

}
